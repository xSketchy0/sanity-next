import Image from 'next/image'
import { useRef } from 'react'

import { PortableText } from '../../../lib/sanity'
import Logo from '../../../public/Logo.svg'
import { HeroProps } from '../../../types'
import css from './Hero.module.scss'

const Hero = (props: HeroProps) => {
    const { heading, subheading, backgroundImage, logo } = props
    const container = useRef()
    const wrapper = useRef()

    return (
        <section ref={container} className={css.container}>
            <div ref={wrapper} className={css.wrapper}>
                {logo && (
                    <Image src={logo?.asset.url} alt={logo?.alt} className={css.logo} width={100} height={100} />
                )}
                {heading && (
                    <div className={css.heading}>
                        <PortableText value={heading} />
                    </div>
                )}
                {subheading && (
                    <div className={css.subheading}>
                        <PortableText value={subheading} />
                    </div>
                )}
            </div>
        </section>
    )
}

export default Hero
