import { colorInput } from '@sanity/color-input'
import {
    dashboardTool,
    projectInfoWidget,
    projectUsersWidget,
    sanityTutorialsWidget,
} from '@sanity/dashboard'
import { visionTool } from '@sanity/vision'
import { createConfig, Slug } from 'sanity'
import { deskTool } from 'sanity/desk'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

import PagePreview from './components/Pages/PagePreview'
import configuration from './schemas/documents/configuration'
import header from './schemas/documents/header'
import page from './schemas/documents/page'
import { schemaTypes } from './schemas/index'

const basePath = '/studio'

export default createConfig({
    basePath,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Studio',
    schema: {
        types: schemaTypes,
    },
    plugins: [
        deskTool({
            structure: (S, context) => {
                const configurationItem = S.listItem()
                    .title(configuration.title)
                    .icon(configuration.icon)
                    .child(
                        S.editor()
                            .id(configuration.name)
                            .schemaType(configuration.name)
                            .documentId(configuration.name)
                    )

                const headerItem = S.listItem()
                    .title(header.title)
                    .icon(header.icon)
                    .child(
                        S.editor()
                            .id(header.name)
                            .schemaType(header.name)
                            .documentId(header.name)
                    )

                const defaultListItems = S.documentTypeListItems().filter(
                    (listItem: any) =>
                        ![configuration.name, header.name].includes(
                            listItem.getId()
                        )
                )

                return S.list()
                    .title('Content')
                    .items([
                        configurationItem,
                        S.divider(),
                        ...defaultListItems,
                        S.divider(),
                        headerItem,
                    ])
            },
            defaultDocumentNode: (S, { schemaType }) => {
                if (schemaType === 'page') {
                    return S.document().views([
                        S.view.form(),
                        S.view.component(PagePreview).title('Preview'),
                    ])
                }
            },
        }),
        visionTool({
            defaultApiVersion: '2022-08-08',
        }),
        unsplashImageAsset(),
        colorInput(),
        dashboardTool({
            widgets: [
                sanityTutorialsWidget(),
                projectInfoWidget(),
                projectUsersWidget(),
            ],
        }),
    ],
    document: {
        productionUrl: async (prev, { document }) => {
            const url = new URL('/api/preview', location.origin)
            const secret = process.env.NEXT_PUBLIC_PREVIEW_SECRET

            if (secret) {
                url.searchParams.set('secret', secret)
            }

            try {
                if (document._type === page.name) {
                    url.searchParams.set(
                        'slug',
                        (document.slug as Slug).current!
                    )
                    return url.toString()
                }
            } catch {
                return prev
            }
        },
        newDocumentOptions: (prev, { creationContext }) => {
            if (creationContext.type === 'global') {
                return prev.filter(
                    (templateItem) =>
                        templateItem.templateId !== configuration.name
                )
            }

            return prev
        },
        actions: (prev, { schemaType }) => {
            if (schemaType === configuration.name) {
                return prev.filter(({ action }) => action !== 'duplicate')
            }

            return prev
        },
    },
})
