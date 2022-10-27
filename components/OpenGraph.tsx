import { imageBuilder } from '../lib/sanity'
import { PageProps } from '../types'

export const OpenGraph = (page: PageProps) => {
    return [
        {
            url: imageBuilder
                .image(page?.openGraphImage)
                .width(800)
                .height(600)
                .url(),
            width: 800,
            height: 600,
            alt: page?.title || 'Missing title',
        },
        {
            url: imageBuilder
                .image(page?.openGraphImage)
                .width(1200)
                .height(630)
                .url(),
            width: 1200,
            height: 630,
            alt: page?.title || 'Missing title',
        },
        {
            url: imageBuilder
                .image(page?.openGraphImage)
                .width(600)
                .height(600)
                .url(),
            width: 600,
            height: 600,
            alt: page?.title || 'Missing title',
        },
    ]
}
