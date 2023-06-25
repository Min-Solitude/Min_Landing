import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'
import classNames from 'classnames/bind'

import { View } from '@/components/shared'
import { images } from '../image-data'
import styles from './Exmaple.module.scss'

const cx = classNames.bind(styles)

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    }
  }
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

const Example = () => {
  const [[page, direction], setPage] = useState([0, 0])
  const imageIndex = wrap(0, images.length, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }
  return (
    <View className={cx('wrapper__example')}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className={cx('wrapper__example__img')}
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
        />
      </AnimatePresence>
      <View
        className={cx('wrapper__example__next')}
        onClick={() => paginate(1)}
        whileTap={{
          scale: 0.9
        }}
      >
        <p>{'‣'}</p>
      </View>
      <View
        className={cx('wrapper__example__prev')}
        onClick={() => paginate(-1)}
        whileTap={{
          scale: 0.9
        }}
      >
        <p>{'‣'}</p>
      </View>
    </View>
  )
}

export default Example
