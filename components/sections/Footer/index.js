import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useRef } from 'react'

import { useIsomorphicLayoutEffect } from '../../../lib/useIsomorphicLayoutEffect'
import css from './Footer.module.scss'

const Footer = () => {
    const wrapper = useRef()
    const footer = useRef()

    useIsomorphicLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        setTimeout(() => {
            gsap.set(wrapper.current, {
                yPercent: -80,
            })

            gsap.to(wrapper.current, {
                yPercent: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: footer.current,
                    start: 'top bottom',
                    end: 'bottom bottom',
                    markers: true,
                    scrub: true,
                    onUpdate: (self) => console.log('progress:', self.progress),
                },
            })
        })
    })
    return (
        <footer ref={footer} className={css.container}>
            <div ref={wrapper} className={css.wrapper}>
                <h2 className={css.title}>
                    <p>Let&apos;s</p>
                    <p>Work</p>
                    <p>together.</p>
                </h2>
            </div>
        </footer>
    )
}

export default Footer
