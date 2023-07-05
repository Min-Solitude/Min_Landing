import classNames from 'classnames/bind'

import styles from './Benga.module.scss'

import { View } from '@/components/shared'
import { useEffect, useState } from 'react'

const cx = classNames.bind(styles)

const Benga = () => {
  const [checkWidth, setCheckWidth] = useState(false)

  const handleCheckWidth = () => {
    if (window.innerWidth < 768) {
      setCheckWidth(true)
    } else {
      setCheckWidth(false)
    }
  }

  useEffect(() => {
    handleCheckWidth()
    window.addEventListener('resize', handleCheckWidth)
    return () => {
      window.removeEventListener('resize', handleCheckWidth)
    }
  }, [checkWidth])

  if (!checkWidth)
    return (
      <View className={cx('wrapper__benga')}>
        <img
          className={cx('wrapper__benga__image')}
          src='https://i.pinimg.com/564x/fb/02/87/fb0287be1d5fd4ac3eb66477b2368034.jpg'
          alt=''
        />
        <View className={cx('wrapper__benga__notice')}>Mở điện thoại á !</View>
      </View>
    )

  return (
    <View className={cx('wrapper__benga')}>
      <img
        className={cx('wrapper__benga__background')}
        src='https://f8-zpc.zdn.vn/444483396884403374/0a415f7dba896bd73298.jpg'
        alt=''
      />
      <View className={cx('wrapper__benga__content')}>
        <h1>Trần Thị Nga</h1>
        <span>Web Front-end Developer</span>
      </View>
    </View>
  )
}

export default Benga
