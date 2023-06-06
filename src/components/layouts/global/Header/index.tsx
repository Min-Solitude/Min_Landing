import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import style from './Header.module.scss'
import { View } from '@/components/shared'
import IonIcon from '@reacticons/ionicons'

const cx = classNames.bind(style)

const variants = {
  visible: { opacity: 1, x: 0 },
  mobile: { opacity: 1, x: 100 },
  website: { opacity: 0, x: 0 }
}

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(true)
  const [isMobileMotionActive, setIsMobileMotionActive] = useState(false)
  const [headerActive, setHeaderActive] = useState(false)
  const [valueScroll, setValueScroll] = useState(0)

  window.addEventListener('scroll', () => {
    setValueScroll(window.scrollY)
  })

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsShowMenu(false)
      setIsMobileMotionActive(true)
    }
    if (window.scrollY > 10) {
      setHeaderActive(true)
    } else {
      setHeaderActive(false)
    }
  }, [valueScroll])

  return (
    <View className={cx('wrapper__header', headerActive && 'wrapper__header--active')}>
      <View className={cx('wrapper__header__inner')}>
        <View className={cx('wrapper__header__inner__logo')}>Min</View>
        <button className={cx('wrapper__header__inner__drop-down')} onClick={() => setIsShowMenu(!isShowMenu)}>
          <IonIcon name='menu' className={cx('wrapper__header__inner__drop-down__icon')} />
        </button>
        {isShowMenu && (
          <motion.nav
            className={cx('wrapper__header__inner__nav-bar')}
            variants={variants}
            initial={isMobileMotionActive ? 'mobile' : 'website'}
            animate='visible'
            transition={{ duration: 0.5 }}
          >
            <a href='#about'>Giới thiệu</a>
            <a href='#service'>Dịch vụ</a>
            <a href='#blog'>Blog</a>
            <a href='#technology'>Công nghệ</a>
            <a href='#contact'>Liên kết</a>
          </motion.nav>
        )}
      </View>
    </View>
  )
}

export default Header
