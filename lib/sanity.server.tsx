import { createClient } from 'next-sanity'

import { sanityConfig } from './config'

export const getClient = (preview) =>
    preview
        ? createClient({
              ...sanityConfig,
              useCdn: false,
              token:
                  process.env.SANITY_API_READ_TOKEN ||
                  process.env.SANITY_API_WRITE_TOKEN,
          })
        : createClient(sanityConfig)
