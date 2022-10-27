import { MdTitle } from 'react-icons/md'
import { defineType, validation } from 'sanity'

export default defineType({
    name: 'display',
    title: 'Display',
    type: 'object',
    icon: MdTitle,
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
