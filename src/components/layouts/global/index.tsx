import React, { FunctionComponent, useEffect } from 'react'
import classNames from 'classnames/bind'

import style from './Global.module.scss'
import { View } from '@/components/shared'
import Header from './Header'
import Footer from './Footer'

const cx = classNames.bind(style)

type GlobalLayoutProps = {
  children: React.ReactNode
}

export const GlobalLayout: FunctionComponent<GlobalLayoutProps> = ({ children }) => {
  const checkAccount = localStorage.getItem('account')

  useEffect(() => {
    if (!checkAccount) {
      window.location.href = '/login'
    }
  }, [checkAccount])

  return (
    <View className={cx('wrapper__global')} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <header className={cx('wrapper__global__header')}>
        <Header />
      </header>
      <main className={cx('wrapper__global__content')}>{children}</main>
      <footer className={cx('wrapper__global__footer')}>
        <Footer />
      </footer>
    </View>
  )
}
