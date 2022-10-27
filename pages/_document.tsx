import { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheetDocument } from 'next-sanity/studio'

import { configurationQuery } from '../lib/queries'
import { getClient } from '../lib/sanity.server'

class Document extends ServerStyleSheetDocument {
    static async getInitialProps(ctx) {
        const initialProps = await ServerStyleSheetDocument.getInitialProps(ctx)
        return getClient(false)
            .fetch(configurationQuery)
            .then(({ lang }) => {
                return { ...initialProps, lang }
            })
    }

    render() {
        return (
            // @ts-ignore
            <Html lang={this.props.lang || 'en'}>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Document
