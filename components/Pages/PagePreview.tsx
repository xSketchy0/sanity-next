import { Card, Text } from '@sanity/ui'
import React from 'react'

const PagePreview = (props: any) => {
    if (!props.document.displayed.slug) {
        return (
            <Card tone="primary" margin={5} padding={6}>
                <Text align="center">
                    Please add a slug to the page to see the preview!
                </Text>
            </Card>
        )
    }

    return (
        <Card scheme="light" style={{ width: '100%', height: '100%' }}>
            <iframe
                style={{ width: '100%', height: '100%' }}
                src={getUrl(props)}
            />
        </Card>
    )
}

const getUrl = ({ document }) => {
    const url = new URL('/api/preview', location.origin)
    const secret = process.env.NEXT_PUBLIC_PREVIEW_SECRET

    if (secret) {
        url.searchParams.set('secret', secret)
    }

    url.searchParams.set('slug', document.displayed.slug?.current!)

    return url.toString()
}

export default PagePreview
