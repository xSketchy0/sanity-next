import { GoSettings } from 'react-icons/go'
import { defineType } from 'sanity'

export default defineType({
    name: 'header',
    title: 'Header',
    type: 'document',
    icon: GoSettings,
    fields: [
        {
            name: 'navigation',
            title: 'Navigation',
            type: 'array',
            of: [
                {
                    title: 'Internal',
                    name: 'internal',
                    type: 'object',
                    fields: [
                        {
                            title: 'Title',
                            name: 'title',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            title: 'URL',
                            name: 'href',
                            type: 'url',
                            validation: (Rule) =>
                                Rule.uri({
                                    scheme: ['http', 'https', 'mailto', 'tel'],
                                    allowRelative: true,
                                }).required(),
                        },
                    ],
                },
            ],
        },
    ],
})
