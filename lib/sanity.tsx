import { PortableText as PortableTextComponent, PortableTextComponents } from '@portabletext/react'
import createImageUrlBuilder from '@sanity/image-url'
import { createPreviewSubscriptionHook } from 'next-sanity'

import { sanityConfig } from './config'

export const imageBuilder = createImageUrlBuilder(sanityConfig)

export const urlForImage = (source) =>
    imageBuilder.image(source).auto('format').fit('max')

export const usePreviewSubscription =
    createPreviewSubscriptionHook(sanityConfig)

const components: PortableTextComponents = {
    types: {
        embedHTML: ({ value }) => (
            <div dangerouslySetInnerHTML={{ __html: value.html }} />
        ),
    },
    marks: {
        strong: ({ children }) => (
            <strong className="text-extrabold">{children}</strong>
        ),
        em: ({ children }) => <em>{children}</em>,
    },
    block: {
        small: ({ children }) => (
            <p className='text-xs'>{children}</p>
        ),
        display: ({ children }) => (
            <p className='text-7xl leading-none'>{children}</p>
        )
    }
}

export const PortableText = (props: any) => (
    <PortableTextComponent components={components} {...props} />
)
