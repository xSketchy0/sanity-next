import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useRef } from 'react'

import SplitText from '../../../lib/SplitText.min'
import { useIsomorphicLayoutEffect } from '../../../lib/useIsomorphicLayoutEffect'
import css from './Display.module.scss'

const Display = () => {
    const heading = useRef()

    useIsomorphicLayoutEffect(() => {
        gsap.registerPlugin(SplitText)

        const childSplit = new SplitText(heading.current, {
            type: 'lines',
            linesClass: 'split-child',
        })

        const parentSplit = new SplitText(heading.current, {
            type: 'lines',
            linesClass: 'split-parent',
        })

        gsap.from(childSplit.lines, {
            duration: 1.5,
            yPercent: 100,
            ease: 'power4',
            stagger: 0.2,
            scrollTrigger: {
                trigger: heading.current,
                scrub: true,
                start: 'top bottom',
            },
        })
    })
    return (
        <section className={css.container}>
            <div>
                <h2 ref={heading} className={css.heading}>
                    <p>DICTIONARY</p>
                    <p>
                        OF{' '}
                        <span className="font-extrabold italic">SOLUTIONS</span>
                    </p>
                </h2>
            </div>
        </section>
    )
}

export default Display
