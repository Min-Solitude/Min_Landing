import { useState } from 'react'
import classNames from 'classnames/bind'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import styles from './Service.module.scss'
import { View } from '@/components/shared'
import { initialTabs as tabs } from '@/motion/Ingredients'

const cx = classNames.bind(styles)

const Service = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0])

  return (
    <View className={cx('wrapper__service')} id='service'>
      <View
        className={cx('wrapper__service__title')}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1>Dịch vụ.</h1>
        <p>
          Đây là những dịch vụ chúng tôi sẽ cung cấp cho bạn. <br /> Hãy xem qua nó và sử dụng. Dịch vụ của chúng tôi là
          hoàn toàn Free.
        </p>
      </View>
      <View className={cx('wrapper__service__box')}>
        <View className={cx('wrapper__service__box__window')}>
          <nav className={cx('wrapper__service__box__window__nav')}>
            <ul className={cx('wrapper__service__box__window__nav__ul')}>
              {tabs.map((item, index) => (
                <motion.li
                  key={index}
                  className={
                    item === selectedTab
                      ? cx(
                          'wrapper__service__box__window__nav__ul__li',
                          'wrapper__service__box__window__nav__ul__li__active'
                        )
                      : cx('wrapper__service__box__window__nav__ul__li')
                  }
                  onClick={() => setSelectedTab(item)}
                >
                  <p>{`${item.title}`}</p>
                </motion.li>
              ))}
            </ul>
          </nav>
          <main className={cx('wrapper__service__box__window__main')}>
            <AnimatePresence>
              <View className={cx('wrapper__service__box__window__main__content')}>
                <motion.div
                  key={selectedTab ? selectedTab.title : 'empty'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {selectedTab ? (
                    <View className={cx('wrapper__service__box__window__main__content__div')}>
                      <img src={selectedTab.image} alt='nevsolit' />
                    </View>
                  ) : (
                    '😋'
                  )}
                  {selectedTab ? (
                    <View className={cx('wrapper__service__box__window__main__content__text')}>
                      <p>
                        {selectedTab.content}
                        <Link className={cx('wrapper__service__box__window__main__content__text__link')} to='/contact'>
                          Đến ngay
                        </Link>
                      </p>
                    </View>
                  ) : (
                    '😋'
                  )}
                </motion.div>
              </View>
            </AnimatePresence>
          </main>
        </View>
      </View>
    </View>
  )
}

export default Service
