import React from 'react'
import classNames from 'classnames/bind'

import styles from './Company.module.scss'
import { View } from '@/components/shared'
import image from '@/assets'
import IonIcon from '@reacticons/ionicons'

const cx = classNames.bind(styles)

const Company = () => {
  return (
    <View className={cx('wrapper__company')}>
      <View className={cx('wrapper__company__inner')}>
        <View className={cx('wrapper__company__inner__image')}>
          <View className={cx('wrapper__company__inner__image__frame')}>
            <img src={image.dino} alt='company' />
          </View>
        </View>
        <View className={cx('wrapper__company__inner__content')}>
          <h2 className={cx('wrapper__company__inner__content__title')}>
            Mạng <span>xã hội</span>
          </h2>
          <p>Kết nối với chúng tôi thông cái các nền tảng mạng xã hội để có thể nhận được sự hỗ trợ tốt nhất</p>
          <div className={cx('wrapper__company__inner__content__social')} id='blog'>
            <a
              href='https://www.facebook.com/kien.mon.33/'
              className={cx('wrapper__company__inner__content__social__button')}
            >
              <IonIcon name='logo-facebook' className={cx('wrapper__company__inner__content__social__button__icon')} />
            </a>
            <a
              href='https://www.instagram.com/ktys4tt/'
              className={cx('wrapper__company__inner__content__social__button')}
            >
              <IonIcon name='logo-instagram' className={cx('wrapper__company__inner__content__social__button__icon')} />
            </a>
            <a href='https://github.com/' className={cx('wrapper__company__inner__content__social__button')}>
              <IonIcon name='logo-github' className={cx('wrapper__company__inner__content__social__button__icon')} />
            </a>
            <a href='https://www.youtube.com/' className={cx('wrapper__company__inner__content__social__button')}>
              <IonIcon name='logo-youtube' className={cx('wrapper__company__inner__content__social__button__icon')} />
            </a>
          </div>
        </View>
      </View>
    </View>
  )
}

export default Company
