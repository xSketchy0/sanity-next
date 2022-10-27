import { ImParagraphRight } from 'react-icons/im'
import { defineType } from 'sanity'

export default defineType({
    name: 'textRight',
    title: 'Text (right)',
    type: 'object',
    icon: ImParagraphRight,
    fields: [
        {
            name: 'content',
            title: 'Content',
            type: 'blockContent',
            validation: (Rule) => Rule.required(),
        },
    ],
    preview: {
        select: {
            title: 'content',
        },
    },
})
