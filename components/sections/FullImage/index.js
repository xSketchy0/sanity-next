import Image from 'next/image'

import flowers from '../../../public/hua-2.jpg'
import css from './FullImage.module.scss'

const FullImage = () => {
    return (
        <section className={css.container}>
            <Image
                className={css.image}
                src={flowers}
                alt="Image"
                sizes="100vw"
                fill
            />
        </section>
    )
}

export default FullImage
