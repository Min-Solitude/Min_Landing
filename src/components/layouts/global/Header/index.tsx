import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import IonIcon from '@reacticons/ionicons'

import style from './Header.module.scss'
import { View } from '@/components/shared'
import Toast from '@/components/custom/toast'

const cx = classNames.bind(style)

const Header = () => {
  const [isActiveList, setIsActiveList] = useState([true, false, false, false, false])
  const [isMobile, setIsMobile] = useState(false)

  const handleClick = (index: any) => {
    setIsActiveList(isActiveList.map((i) => i === index))
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <View className={cx('wrapper__header')}>
      <View className={cx('wrapper__header__inner')}>
        <View className={cx('wrapper__header__inner__logo')}>Nevsolit</View>

        <motion.nav className={cx('wrapper__header__inner__nav-bar')}>
          <a href='#home' className={isActiveList[0] ? cx('active') : ''} onClick={() => handleClick(0)}>
            {isMobile ? <IonIcon name='home' /> : <span>Trang chủ</span>}
          </a>
          <a href='#about' className={isActiveList[2] ? cx('active') : ''} onClick={() => handleClick(2)}>
            {isMobile ? <IonIcon name='newspaper' /> : <span>Giới thiệu</span>}
          </a>
          <a href='#service' className={isActiveList[1] ? cx('active') : ''} onClick={() => handleClick(1)}>
            {isMobile ? <IonIcon name='construct' /> : <span>Dịch vụ</span>}
          </a>
          <a href='#technology' className={isActiveList[3] ? cx('active') : ''} onClick={() => handleClick(3)}>
            {isMobile ? <IonIcon name='code-slash' /> : <span>Công nghệ</span>}
          </a>
        </motion.nav>
        <Link
          to='#'
          className={cx('wrapper__header__inner__button')}
          onClick={() => {
            Toast('Đang phát triển').warning()
          }}
        >
          Liên kết
        </Link>
      </View>
    </View>
  )
}

export default Header
