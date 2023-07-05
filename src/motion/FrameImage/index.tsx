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

const Image = [
  'https://replay.software/sleeve/images/ScreenshotCompactVentura.jpg',
  'https://replay.software/sleeve/images/ScreenshotCompactMonterey.jpg',
  'https://replay.software/sleeve/images/ScreenshotAlbum3.png',
  'https://magician.design/assets/images/magic-hero.jpg',
  'https://magician.design/assets/images/magic-icon.jpg'
]

function FrameImage({ id, description, title }: FrameImageProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 300)

  return (
    <motion.section className={cx('wrapper__frameImage')}>
      <div ref={ref} className={cx('wrapper__frameImage__image')}>
        <img src={Image[id - 1]} alt='nevsolit' />
      </div>
      <motion.div className={cx('wrapper__frameImage__count')} style={{ y }}>
        <h3>{`${title}`}</h3>
        <p>{description}</p>
      </motion.div>
    </motion.section>
  )
}

export default FrameImage
