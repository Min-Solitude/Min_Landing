import React, { FunctionComponent, useEffect } from 'react'
import classNames from 'classnames/bind'
import { motion } from 'framer-motion'

import style from './Global.module.scss'
import { View } from '@/components/shared'
import Header from './Header'
import Footer from './Footer'
import Welcome from '@/components/shared/Welcome'
import IonIcon from '@reacticons/ionicons'

const cx = classNames.bind(style)

type GlobalLayoutProps = {
  children: React.ReactNode
}

export const GlobalLayout: FunctionComponent<GlobalLayoutProps> = ({ children }) => {
  const [welcome, setWelcome] = React.useState<boolean>(false)

  const handleCloseWelcome = () => {
    setWelcome(true)
    sessionStorage.setItem('welcome', setWelcome.toString())
  }

  useEffect(() => {
    const welcome = sessionStorage.getItem('welcome')
    if (welcome) {
      setWelcome(true)
    }
  }, [welcome])

  return (
    <>
      {!welcome && (
        <View className={cx('wrapper__global__welcome')}>
          <View
            className={cx('wrapper__global__welcome__inner')}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <View className={cx('wrapper__global__welcome__inner__content')}>
              <Welcome />
            </View>
            <View className={cx('wrapper__global__welcome__inner__image')}>
              <img src='https://i.pinimg.com/originals/b0/e5/ec/b0e5ec79e0a3b76b09bef11020cd12cd.gif' alt='nevsolit' />
              <IonIcon
                className={cx('wrapper__global__welcome__inner__image__close')}
                name='close'
                onClick={() => {
                  handleCloseWelcome()
                }}
              />
            </View>
          </View>
        </View>
      )}
      <View className={cx('wrapper__global')}>
        <motion.header className={cx('wrapper__global__header')}>
          <Header />
        </motion.header>
        <main className={cx('wrapper__global__content')}>{children}</main>
        <footer className={cx('wrapper__global__footer')}>
          <Footer />
        </footer>
      </View>
    </>
  )
}
