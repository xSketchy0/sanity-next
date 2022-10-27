import css from './TextRight.module.scss'

const TextRight = () => {
    return (
        <section className={css.container}>
            <div className={css.textContainer}>
                <p className={css.text}>
                    <strong>AJUKNO</strong> is a Dutch<sup>(AMS)</sup> based{' '}
                    <strong>developer</strong> driven by innovative ideas,
                    passion and creativity focusing on creating{' '}
                    <strong>immersive spaces & design</strong> ALL MADE BY{' '}
                    <strong>AJ Sijpenhof</strong>.
                </p>
            </div>
        </section>
    )
}

export default TextRight
