// Documents
export interface ConfigurationProps {
    title: string
    url: string
    lang: string
    logo?: any
}

export interface PageProps {
    redirect?: PageProps
    slug: {
        current: string
    }
    title?: string
    content?: any
    mainImage?: any
    seoTitle?: string
    seoDescription?: string
    openGraphImage?: any
    disallowRobots?: boolean
    includeInSitemap?: boolean
}

export interface HeaderProps {
    navigation?: any
}

// Sections
export interface HeroProps {
    heading?: any
    subheading?: any
    backgroundImage?: any
    color_1?: any
    color_2?: any,
    logo?: {
        alt?: string,
        asset: {
            extension: string,
            url: string
        }
    }
}

export interface FullImageProps {
    image: any
}

export interface TextRightProps {
    content: any
}

export interface DisplayProps {
    heading: any
}

export interface FooterProps {
    heading: any
}
