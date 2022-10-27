import blockContent from './blockContent'
import configuration from './documents/configuration'
import page from './documents/page'
import display from './sections/display'
import footer from './sections/footer'
import fullImage from './sections/fullImage'
import hero from './sections/hero'
import textRight from './sections/textRight'

export const schemaTypes = [
    // Documents
    configuration,
    page,

    // Objects
    blockContent,

    // Sections
    hero,
    fullImage,
    textRight,
    display,
    footer,
]
