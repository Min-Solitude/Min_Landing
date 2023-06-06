import React from 'react'
import classNames from 'classnames/bind'

import styles from './Footer.module.scss'
import { View } from '@/components/shared'

const cx = classNames.bind(styles)

const Footer = () => {
  return (
    <View className={cx('wrapper__footer')}>
      <View className={cx('wrapper__footer__inner')}>
        <View className={cx('wrapper__footer__inner__title')}>Follow us</View>
        <View className={cx('wrapper__footer__inner__content')}>
          <View className={cx('wrapper__footer__inner__content__item')}>
            <h3>GIỚI THIỆU</h3>
            <p>Công ty</p>
            <p>Võ Ngọc Min Kiên</p>
            <p>Phong cách thiết kế</p>
            <p>BLOG</p>
          </View>
          <View className={cx('wrapper__footer__inner__content__item')}>
            <h3>DỊCH VỤ</h3>
            <p>Thiết kế Website</p>
            <p>Thiết kế Giao diện người dùng</p>
            <p>Lập trình Website</p>
          </View>
          <View className={cx('wrapper__footer__inner__content__item')}>
            <h3>Cửa Hàng</h3>
            <p>Min Drawing</p>
            <p>Min Nev Fix</p>
          </View>
          <View className={cx('wrapper__footer__inner__content__item')}>
            <h3>Liên Hệ</h3>
            <p>Address 958/3 Au Co</p>
          </View>
        </View>
        <View className={cx('wrapper__footer__inner__create')}>
          <p>Copyright © 2023 Lavenes. All rights reserved.</p>
          <p>VN</p>
        </View>
      </View>
    </View>
  )
}

export default Footer
