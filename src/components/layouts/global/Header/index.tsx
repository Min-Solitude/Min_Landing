import classNames from 'classnames/bind'
import { useState } from 'react'
import { motion } from 'framer-motion'

import style from './Header.module.scss'
import { View } from '@/components/shared'
import { NavLink } from 'react-router-dom'

const cx = classNames.bind(style)

const Header = () => {
  return (
    <View
      className={cx('wrapper__header')}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <View className={cx('wrapper__header__inner')}>
        <View className={cx('wrapper__header__inner__logo')}>Nev</View>

        <motion.nav className={cx('wrapper__header__inner__nav-bar')}>
          <NavLink to={'/'} className={(nav) => cx('wrapper__header__inner__nav-bar__item', { active: nav.isActive })}>
            <span>Trang chủ</span>
          </NavLink>
          <NavLink
            to={'/about'}
            className={(nav) => cx('wrapper__header__inner__nav-bar__item', { active: nav.isActive })}
          >
            <span>Giới thiệu</span>
          </NavLink>
          <NavLink
            to={'/service'}
            className={(nav) => cx('wrapper__header__inner__nav-bar__item', { active: nav.isActive })}
          >
            <span>Dịch vụ</span>
          </NavLink>
          <NavLink
            to={'/technology'}
            className={(nav) => cx('wrapper__header__inner__nav-bar__item', { active: nav.isActive })}
          >
            <span>Công nghệ</span>
          </NavLink>
          <button>Contact</button>
        </motion.nav>
      </View>
    </View>
  )
}

export default Header
