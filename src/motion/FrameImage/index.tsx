import { MotionValue, useScroll, motion, useTransform } from 'framer-motion'
import { useRef } from 'react'
import classNames from 'classnames/bind'

import styles from './FrameImage.module.scss'

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

const cx = classNames.bind(styles)

interface FrameImageProps {
  id: number
  description: string
  title: string
}

function FrameImage({ id, description, title }: FrameImageProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 300)

  return (
    <section className={cx('wrapper__frameImage')}>
      <div ref={ref} className={cx('wrapper__frameImage__image')}>
        <img src={`/src/assets/imgs/tom0${id}.jpg`} alt='nevsolit' />
      </div>
      <motion.div className={cx('wrapper__frameImage__count')} style={{ y }}>
        <h3>{`${title}`}</h3>
        <p>{description}</p>
      </motion.div>
    </section>
  )
}

export default FrameImage
