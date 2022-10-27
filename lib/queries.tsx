import { groq } from 'next-sanity'

export const pageBySlugQuery = groq`
    *[_type == 'page' && slug.current == $slug] | order(_updatedAt desc) [0] {
        ...,
        redirect -> {
            slug
        }
    }
`

export const configurationQuery = groq`
    *[_id == 'configuration'][0]{
        ...,
        logo {
            ...,
            asset-> {
                extension,
                url
            }
        }
    }
`

export const slugsQuery = groq`
    *[_type == 'page' && defined(slug.current) && redirect == null][].slug.current
`
