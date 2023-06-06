import React from 'react'
import classNames from 'classnames/bind'

import styles from './itemLanguage.module.scss'
import { View } from '@/components/shared'

const cx = classNames.bind(styles)

interface ItemLanguageProps {
  image: string
  title: string
  description: string
}

const ItemLanguage = (data: ItemLanguageProps) => {
  return (
    <View className={cx('wrapper__item-language')}>
      <View className={cx('wrapper__item-language__image')}>
        <img src={data.image} alt='min' />
      </View>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </View>
  )
}

export default ItemLanguage
