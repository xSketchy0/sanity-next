import { BsCardImage } from 'react-icons/bs'
import { defineType } from 'sanity'

export default defineType({
    name: 'fullImage',
    title: 'Full Image',
    type: 'object',
    icon: BsCardImage,
    fields: [
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
    ],
    preview: {
        select: {
            media: 'image',
        },
    },
})
