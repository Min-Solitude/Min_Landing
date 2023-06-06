import React from 'react'
import classNames from 'classnames/bind'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import styles from './Technology.module.scss'
import { View } from '@/components/shared'

const cx = classNames.bind(styles)

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '50vh'
}

const slideImages = [
  {
    url: 'https://cdnb.artstation.com/p/assets/images/images/040/554/047/4k/surendra-rajawat-dream.jpg?1629209288',
    caption: 'Slide 1'
  },
  {
    url: 'https://cdna.artstation.com/p/assets/images/images/030/765/002/4k/florent-boston-scene02ff.jpg?1601574043',
    caption: 'Slide 2'
  },
  {
    url: 'https://cdna.artstation.com/p/assets/images/images/034/887/098/large/florent-boston-6.jpg?1613508226',
    caption: 'Slide 3'
  }
]

const Technology = () => {
  return (
    <View className={cx('wrapper__teachnology')}>
      <View className={cx('wrapper__teachnology__title')}>
        <h1>
          Công <span>nghệ</span>
        </h1>
      </View>
      <View className={cx('wrapper__teachnology__inner')} id='technology'>
        <Slide>
          {slideImages.map((slideImage, index) => (
            <View className={cx('wrapper__teachnology__inner__image')} key={index}>
              <img src={slideImage.url} alt={slideImage.caption} />
            </View>
          ))}
        </Slide>
      </View>
      <p></p>
    </View>
  )
}

export default Technology
