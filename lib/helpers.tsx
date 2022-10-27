import * as SectionComponents from '../components/sections'
import { configurationQuery, pageBySlugQuery, slugsQuery } from './queries'
import { getClient } from './sanity.server'

export const getPageBySlug = async (preview: boolean, params: any) => {
    const page = await getClient(preview).fetch(pageBySlugQuery, {
        slug: Array.isArray(params.slug)
            ? params.slug.join('/')
            : params.slug || '/',
    })

    return { page }
}

export const getConfiguration = async (preview: boolean) => {
    const configuration = await getClient(preview).fetch(configurationQuery)

    return { configuration }
}

export const getSlugs = async () => {
    const slugs = await getClient(false).fetch(slugsQuery)

    return slugs.map((slug: string) => ({
        params: {
            slug: slug !== '/' ? slug.split('/') : [],
        },
    }))
}

export const resolveSections = (section: { _type: any }) => {
    const Section = SectionComponents[capitalizeString(section?._type)]

    if (Section) return Section

    return null
}

export const capitalizeString = (str) => {
    if (typeof str !== 'string' || !str) return str

    return str.charAt(0).toUpperCase() + str.slice(1)
}
