import classNames from 'classnames/bind'
import { motion, Variants } from 'framer-motion'

import styles from './Banner.module.scss'
import { View } from '@/components/shared'

const cx = classNames.bind(styles)

const Banner = () => {
  return (
    <View className={cx('wrapper__banner')} id='home'>
      <h3>Sẵn sàng ngay bây giờ!</h3>
      <h2>
        Trải nghiệm website <br /> dành cho những nhà thiết kế.
      </h2>
      <View className={cx('wrapper__banner__slider')}>
        <motion.img src='https://cdnb.artstation.com/p/assets/images/images/021/865/735/4k/anato-finnstark-god-petit.jpg?1573228136' />
        <motion.img
          src='https://cdnb.artstation.com/p/assets/images/images/003/820/141/4k/dominik-mayer-cloud-machine.jpg?1477659427'
          drag='x'
          dragConstraints={{ left: -900, right: 900 }}
        />
        <motion.img
          src='https://cdna.artstation.com/p/assets/images/images/024/588/852/4k/anato-finnstark-web-petit.jpg?1582898555'
          drag='x'
          dragConstraints={{ left: -950, right: 950 }}
        />
        <motion.img
          src='https://cdnb.artstation.com/p/assets/images/images/004/416/851/4k/jason-scheier-monument-valley-study-2-js.jpg?1483571113'
          drag='x'
          dragConstraints={{ left: -1000, right: 1000 }}
        />
      </View>
    </View>
  )
}

export default Banner
