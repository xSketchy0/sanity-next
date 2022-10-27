import { RiPagesLine } from 'react-icons/ri'
import { defineType } from 'sanity'

export default defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    icon: RiPagesLine,
    groups: [
        {
            name: 'metadata',
            title: 'Metadata',
            default: true,
        },
        {
            name: 'content',
            title: 'Content',
        },
        {
            name: 'seo',
            title: 'SEO',
        },
    ],
    fields: [
        {
            name: 'redirect',
            title: 'Redirect',
            type: 'reference',
            group: 'metadata',
            description:
                'Use this if you want this page to redirect to one of the existing pages. You cannot redirect to the same document as this will cause a redirect loop.',
            to: [{ type: 'page' }],
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            group: 'metadata',
            description:
                'The slug is the part of the URL after our domain. For example "https://example.com/this/could-be/our/slug". To create a page on our route path "https://example.com/", we can use "/" as our slug.',
            options: {
                source: 'title',
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            group: 'content',
        },
        {
            name: 'content',
            type: 'array',
            title: 'Builder',
            group: 'content',
            of: [
                { type: 'hero' },
                { type: 'fullImage' },
                { type: 'display' },
                { type: 'footer' },
            ],
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            group: 'content',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'seoTitle',
            title: 'Title for SEO',
            type: 'string',
            group: 'seo',
            description:
                'Make it as enticing as possible to convert users in social feeds and Google searches. Ideally between 15 and 70 characters.',
        },
        {
            name: 'seoDescription',
            title: 'Short paragraph for SEO',
            type: 'text',
            group: 'seo',
            description:
                "Optional but highly encouraged as it'll help you convert more visitors from Google & socials. Ideally between 70 and 160 characters.",
        },
        {
            name: 'openGraphImage',
            type: 'image',
            title: 'Open Graph Image',
            description: 'Image for sharing previews on Facebook, Twitter etc.',
            group: 'seo',
        },
        {
            name: 'disallowRobots',
            type: 'boolean',
            title: 'Disallow in robots.txt',
            description: 'Hide this route for search engines',
            group: 'seo',
        },
        {
            name: 'includeInSitemap',
            type: 'boolean',
            title: 'Include page in sitemap',
            description: 'For search engines. Will be added to /sitemap.xml',
            group: 'seo',
        },
    ],
    preview: {
        select: {
            title: 'title',
            slug: 'slug',
            media: 'openGraphImage',
        },
        prepare(selection) {
            const { title, slug } = selection

            return {
                title: title,
                subtitle: `https://example.com/${
                    slug.current === '/' ? '' : slug.current
                }`,
            }
        },
    },
})
