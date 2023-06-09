import classNames from 'classnames/bind'
import styles from './About.module.scss'
import { View } from '@/components/shared'
import FrameImage from '@/motion/FrameImage'

const cx = classNames.bind(styles)

const cards = [
  {
    id: 1,
    title: 'Web Development',
    description: 'We build web applications with the latest technologies.'
  },
  {
    id: 2,
    title: 'Mobile Development',
    description: 'We build mobile applications with the latest technologies.'
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'We build UI/UX Design with the latest technologies.'
  },
  {
    id: 4,
    title: 'Branding',
    description: 'We build branding with the latest technologies.'
  },
  {
    id: 5,
    title: 'Digital Marketing',
    description: 'We build digital marketing with the latest technologies.'
  }
]

const About = () => {
  return (
    <View className={cx('wrapper__about')} id='about'>
      <View className={cx('wrapper__about__title')}>
        <h1>Đắm mình.</h1>
        <p>
          Các trang tài sản của chúng tôi không chỉ đẹp. <br /> Tìm hiểu sâu hơn về tài chính, tin tức, ước tính, v.v.
          từ mọi nơi trong ứng dụng.
        </p>
      </View>
      {cards.map((item, index) => (
        <FrameImage id={item.id} key={index} description={item.description} title={item.title} />
      ))}
    </View>
  )
}

export default About
