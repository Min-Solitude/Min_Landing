import classNames from 'classnames/bind'

import styles from './itemService.module.scss'
import { View } from '@/components/shared'

const cx = classNames.bind(styles)

const ItemService = (data: any) => {
  return (
    <View className={cx('wrapper__item-service')}>
      <View className={cx('wrapper__item-service__image')}>
        <img src={data.image} alt={data.title} />
      </View>
      <View className={cx('wrapper__item-service__content')}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <a href={data.link}>Xem</a>
      </View>
    </View>
  )
}

export default ItemService
