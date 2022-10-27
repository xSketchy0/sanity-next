import { pageBySlugQuery } from '../../lib/queries'
import { getClient } from '../../lib/sanity.server'

const redirectToPreview = (res, Location) => {}

const preview = async (req, res) => {
    const secret = process.env.NEXT_PUBLIC_PREVIEW_SECRET

    if (secret && req.query.secret !== secret) {
        return res.status(401).json({
            messagE: 'Invalid secret',
        })
    }

    if (!req.query.slug) {
        return redirectToPreview(res, '/')
    }

    const page = await getClient(true).fetch(pageBySlugQuery, {
        slug: req.query.slug,
    })

    if (!page) {
        return res.status(401).json({
            message: 'Invalid slug',
        })
    }

    redirectToPreview(res, `/${page.slug === '/' ? '' : page.slug}`)
}

export default preview
