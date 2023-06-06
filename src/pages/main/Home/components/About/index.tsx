import classNames from 'classnames/bind'

import styles from './About.module.scss'
import { View } from '@/components/shared'

const cx = classNames.bind(styles)

const About = () => {
  return (
    <View className={cx('wrapper__about')} id='about'>
      <h1>
        Giới <span>thiệu</span>
      </h1>
      <p>Chúng tôi cung cấp những dịch vụ về website trong lĩnh vực giải trí,...</p>
    </View>
  )
}

export default About
