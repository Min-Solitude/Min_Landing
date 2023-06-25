import classNames from 'classnames/bind'

import styles from './Home.module.scss'
import { View } from '@/components/shared'
import Banner from './components/Banner'
import About from './components/About'
import Service from './components/Service'
import Technology from './components/Technology'
import Language from './components/Language'
import Section from '@/motion/Section'
const cx = classNames.bind(styles)

const Home = () => {
  return (
    <View className={cx('wrapper__home')}>
      <Section>
        <Banner />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <Service />
      </Section>
      <Section>
        <Technology />
      </Section>
      <Section>
        <Language />
      </Section>
    </View>
  )
}

export default Home
