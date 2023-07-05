import classNames from 'classnames/bind'
import { motion } from 'framer-motion'

import styles from './Banner.module.scss'
import { View } from '@/components/shared'

const cx = classNames.bind(styles)

const Banner = () => {
  return (
    <View className={cx('wrapper__banner')} id='home'>
      <View
        className={cx('wrapper__banner__title')}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1>There’s an entire app store.</h1>
        <p>Discover amazing self-hosted apps in Umbrel App Store and install them in one click.</p>
        <View className={cx('wrapper__banner__title__button')}>
          <motion.button whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
            Store
          </motion.button>
          <motion.button whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
            App
          </motion.button>
        </View>
      </View>
      <View className={cx('wrapper__banner__image')}>
        <View
          className={cx('wrapper__banner__image__first')}
          initial={{ opacity: 0, y: '-50%', x: '0%' }}
          animate={{ opacity: 1, y: '-50%', x: '-30%' }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src='https://umbrel.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapp-store-wing-left.57dd5d0b.png&w=1920&q=30'
            alt='nevsolit'
          />
        </View>
        <View
          className={cx('wrapper__banner__image__second')}
          initial={{ scale: 0.9, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, x: '-50%', y: '-50%' }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src='https://umbrel.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapp-store-center.88d1f7cd.png&w=828&q=75'
            alt='nevsolit'
          />
        </View>
        <View
          className={cx('wrapper__banner__image__third')}
          initial={{ opacity: 0, y: '-50%', x: '-100%' }}
          animate={{ opacity: 1, y: '-50%', x: '-70%' }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src='https://umbrel.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapp-store-wing-right.61ccf5d8.png&w=1920&q=30'
            alt='nevsolit'
          />
        </View>
      </View>
    </View>
  )
}

export default Banner
