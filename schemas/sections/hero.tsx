import { TbSection } from 'react-icons/tb'
import { defineType } from 'sanity'

export default defineType({
    name: 'hero',
    title: 'Hero',
    type: 'object',
    icon: TbSection,
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'blockContent',
        },
        {
            name: 'subheading',
            title: 'Subheading',
            type: 'blockContent',
        },
        {
            name: 'backgroundImage',
            type: 'image',
            title: 'Background image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'color_1',
            title: 'Color (1)',
            type: 'color',
        },
        {
            name: 'color_2',
            title: 'Color (2)',
            type: 'color',
        },
    ],
    preview: {
        select: {
            title: 'heading',
            subtitle: 'subheading',
            media: 'backgroundImage',
        },
    },
})
