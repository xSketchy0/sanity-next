import { CogIcon } from '@sanity/icons'
import { parse } from 'bcp-47'
import { defineType } from 'sanity'

export default defineType({
    name: 'configuration',
    title: 'Configuration',
    type: 'document',
    icon: CogIcon,
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'url',
            type: 'url',
            title: 'Canonical URL',
            description: 'The main site url. Used to create canonical url',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Language',
            description:
                'Should be a valid bcp47 language code like en, en-US, no or nb-NO',
            name: 'lang',
            type: 'string',
            validation: (Rule) =>
                Rule.custom((lang: string) =>
                    parse(lang) ? true : 'Please use a valid bcp47 code'
                ).required(),
        },
        {
            name: 'logo',
            title: 'Brand Logo',
            type: 'image',
            description:
                'Best choice is to use an SVG where the color is set to currentColor.',
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Descriptive label for screen readers & SEO',
                    description:
                        'Optional but highly encouraged to make content more accessible',
                    options: {
                        isHighlighted: true,
                    },
                },
            ],
        },
    ],
})
