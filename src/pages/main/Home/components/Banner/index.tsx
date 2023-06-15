import classNames from 'classnames/bind'
import { motion } from 'framer-motion'

import styles from './Banner.module.scss'
import { View } from '@/components/shared'
import image from '@/assets'

const cx = classNames.bind(styles)

const Banner = () => {
  return (
    <View className={cx('wrapper__banner')}>
      <View className={cx('wrapper__banner__inner')}>
        <View className={cx('wrapper__banner__inner__content')}>
          <View className={cx('wrapper__banner__inner__content__detail')}>
            <h1>
              Welcome to <span>nev</span>
            </h1>
            <p>Web Developer & Content Creater</p>
            <motion.button whileTap={{ scale: 0.9 }}>Dịch vụ</motion.button>
          </View>
          <View className={cx('wrapper__banner__inner__content__image')}>
            <View className={cx('wrapper__banner__inner__content__image__frame')}>
              <img
                src='https://i.pinimg.com/736x/d6/dd/21/d6dd2187f2e90dd473a61a6e5394dea3.jpg'
                alt='nev'
                className={cx('wrapper__banner__inner__content__image__frame__avatar')}
              />
              <img src={image.banner} alt='nev' className={cx('wrapper__banner__inner__content__image__frame__icon')} />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Banner
