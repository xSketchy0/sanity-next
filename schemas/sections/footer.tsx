import { BiDockBottom } from 'react-icons/bi'
import { defineType } from 'sanity'

export default defineType({
    name: 'footer',
    title: 'Footer',
    type: 'object',
    icon: BiDockBottom,
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'blockContent',
            validation: (Rule) => Rule.required(),
        },
    ],
    preview: {
        select: {
            title: 'heading',
        },
    },
})
