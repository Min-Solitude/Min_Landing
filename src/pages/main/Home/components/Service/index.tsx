import React, { useEffect } from 'react'
import classNames from 'classnames/bind'

import styles from './Service.module.scss'
import { View } from '@/components/shared'
import axios from 'axios'
import { IService } from '@/types/Service'
import ItemService from '@/components/custom/itemService'

const cx = classNames.bind(styles)

const Service = () => {
  const [service, setService] = React.useState<IService[]>([])

  useEffect(() => {
    axios.get('https://647c4cafc0bae2880ad08ac3.mockapi.io/Service').then((res) => {
      setService(res.data)
    })
  }, [])

  return (
    <View className={cx('wrapper__service')} id='service'>
      <View className={cx('wrapper__service__inner')}>
        {service?.map((item: IService) => (
          <ItemService key={item.id} {...item} />
        ))}
      </View>
    </View>
  )
}

export default Service
