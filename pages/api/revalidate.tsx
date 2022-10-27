import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'

import { getClient } from '../../lib/sanity.server'

export const config = {
    api: {
        bodyParser: false,
    },
}

const log = (msg, error?) => {
    console[error ? 'error' : 'log'](`[revalidate] ${msg}`)
}

const readBody = async (readable) => {
    const chunks = []
    for await (const chunk of readable) {
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
    }

    return Buffer.concat(chunks).toString('utf8')
}

const revalidate = async (req, res) => {
    const signature = req.headers[SIGNATURE_HEADER_NAME]
    const body = await readBody(req)

    if (
        !isValidSignature(
            body,
            signature,
            process.env.SANITY_REVALIDATE_SECRET?.trim()
        )
    ) {
        const invalidSignature = 'Invalid signature'

        log(invalidSignature, true)

        res.status(401).json({
            success: false,
            message: invalidSignature,
        })

        return
    }

    const jsonBody = JSON.parse(body)
    const { _id: id, _type } = jsonBody

    if (typeof id !== 'string' || !id) {
        const invalidId = 'Invalid _id'

        log(invalidId, true)

        return res.status(400).json({
            message: invalidId,
        })
    }

    // log(`Querying page slug for _id '${id}', type '${_type}' ..`)
    log(`Querying transactions for _id '${id}', type '${_type}' ..`)

    const transactions = await fetch(
        `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/history/${process.env.NEXT_PUBLIC_SANITY_DATASET}/transactions/${id}?excludeContent=true`,
        {
            headers: {
                Authentication: `Bearer ${process.env.SANITY_API_READ_TOKEN}`,
            },
        }
    )
        .then((res) => res.text())
        .then((data: any) => data.match(/.+/g).map(JSON.parse))

    if (transactions[transactions.length - 2]) {
    }

    // await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/history/${process.env.NEXT_PUBLIC_SANITY_DATASET}/documents/${id}?revision=${transactions}`)
}
