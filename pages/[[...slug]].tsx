import { NextSeo } from 'next-seo'

import Layout from '../components/Layout'
import { OpenGraph } from '../components/OpenGraph'
import RenderSections from '../components/RenderSections'
import { Hero } from '../components/sections'
import { getConfiguration, getPageBySlug, getSlugs } from '../lib/helpers'
import { pageBySlugQuery } from '../lib/queries'
import { usePreviewSubscription } from '../lib/sanity'
import { ConfigurationProps, PageProps } from '../types'

interface Props {
    data: {
        page: PageProps
    }
    preview: any
    configuration: ConfigurationProps
}

const PageBuilder = (props: Props) => {
    const { data: initialData, preview, configuration } = props
    const slug = initialData?.page?.slug
    const { data } = usePreviewSubscription(pageBySlugQuery, {
        params: { slug },
        initialData: initialData,
        enabled: preview && !!slug,
    })

    const { page } = data || {}

    return (
        <Layout preview={preview}>
            <NextSeo
                title={page?.seoTitle || page?.title}
                titleTemplate={`%s | ${configuration?.title}`}
                description={page?.seoDescription}
                canonical={
                    configuration?.url &&
                    `${configuration?.url}/${
                        page?.slug?.current === '/' ? '' : page?.slug?.current
                    }`
                }
                openGraph={{
                    images: page?.openGraphImage ? OpenGraph(page) : [],
                }}
                noindex={page?.disallowRobots}
            />
            {page && <RenderSections {...configuration} sections={page?.content} />}
        </Layout>
    )
}

export const getStaticProps = async ({ params, preview = false }) => {
    const { page } = await getPageBySlug(preview, params)
    const { configuration } = await getConfiguration(preview)

    if (!page || page?.length === 0)
        return {
            notFound: true,
        }

    if (page?.redirect)
        return {
            redirect: {
                destination: page?.redirect?.slug?.current,
                permanent: false,
            },
        }

    return {
        props: {
            preview,
            data: {
                page,
            },
            configuration,
        },
        revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
    }
}

export const getStaticPaths = async () => {
    const slugs = await getSlugs()

    return {
        paths: slugs,
        fallback: 'blocking',
    }
}

export default PageBuilder
