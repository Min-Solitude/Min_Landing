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
  'https://i.pinimg.com/564x/9b/15/82/9b158254f5d0eea873eca5ff1dc6b916.jpg',
  'https://i.pinimg.com/564x/d4/82/d0/d482d081d6b58cfd38da7c30b906991a.jpg',
  'https://i.pinimg.com/564x/d7/eb/9e/d7eb9e16c64f40bfc6b35dd3ed6be2f9.jpg',
  'https://i.pinimg.com/564x/7f/75/6c/7f756c0c14ee3c5b1b9d358549e58dd9.jpg',
  'https://i.pinimg.com/564x/96/b8/d6/96b8d60a8ddcc5a4849dc8d4b1c69f3e.jpg'
]

function FrameImage({ id, description, title }: FrameImageProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 300)

  return (
    <section className={cx('wrapper__frameImage')}>
      <div ref={ref} className={cx('wrapper__frameImage__image')}>
        <img src={Image[id - 1]} alt='nevsolit' />
      </div>
      <motion.div className={cx('wrapper__frameImage__count')} style={{ y }}>
        <h3>{`${title}`}</h3>
        <p>{description}</p>
      </motion.div>
    </section>
  )
}

export default FrameImage
