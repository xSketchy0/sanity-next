import { defineType } from 'sanity'

export default defineType({
    name: 'blockContent',
    title: 'Block Content',
    type: 'array',
    of: [
        {
            title: 'Block',
            type: 'block',
            styles: [
                { title: 'Small', value: 'small' },
                { title: 'Normal', value: 'normal' },
                { title: 'Display', value: 'display' },
                { title: 'H1', value: 'h1' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'Quote', value: 'blockquote' },
            ],
            lists: [{ title: 'Bullet', value: 'bullet' }],
            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
                ],
                annotations: [
                    {
                        title: 'URL',
                        name: 'link',
                        type: 'object',
                        fields: [
                            {
                                title: 'URL',
                                name: 'href',
                                type: 'url',
                            },
                        ],
                    },
                ],
            },
        },
        {
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
})
