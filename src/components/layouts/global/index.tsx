import React, { FunctionComponent } from 'react'
import classNames from 'classnames/bind'
import { motion } from 'framer-motion'

import style from './Global.module.scss'
import { View } from '@/components/shared'
import Header from './Header'
import Footer from './Footer'

const cx = classNames.bind(style)

type GlobalLayoutProps = {
  children: React.ReactNode
}

export const GlobalLayout: FunctionComponent<GlobalLayoutProps> = ({ children }) => {
  return (
    <View className={cx('wrapper__global')} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.header className={cx('wrapper__global__header')}>
        <Header />
      </motion.header>
      <main className={cx('wrapper__global__content')}>{children}</main>
      <footer className={cx('wrapper__global__footer')}>
        <Footer />
      </footer>
    </View>
  )
}
