import React, { useEffect } from 'react'
import classNames from 'classnames/bind'

import styles from './TopMusic.module.scss'
import { View } from '@/components/shared'
import axios from 'axios'
import { Link } from 'react-router-dom'
import HorizontalScroll from 'react-scroll-horizontal'

const cx = classNames.bind(styles)

interface GenreTop100MusicProps {
  id: number
  title: string
}

const genreTop100Music: GenreTop100MusicProps[] = [
  {
    id: 1,
    title: 'Nổi bật'
  },
  {
    id: 2,
    title: 'Nhạc Việt Nam'
  },
  {
    id: 3,
    title: 'Nhạc Châu Á'
  },
  {
    id: 4,
    title: 'Nhạc Châu Mỹ '
  },
  {
    id: 5,
    title: 'Nhạc Hòa Tấu'
  }
]

const TopMusic = () => {
  const [topMusic, setTopMusic] = React.useState<any[]>([])
  const [genreTopMusic, setgenreTopMusic] = React.useState<number>(2)

  const getTop100Music = () => {
    axios.get('http://localhost:3000/api/top100').then((res) => {
      setTopMusic(res.data.data[genreTopMusic].items)
    })
  }

  useEffect(() => {
    getTop100Music()
  }, [genreTopMusic])

  return (
    <View className={cx('wrapper__top-music')}>
      <View className={cx('wrapper__top-music__title')}>Top 100</View>
      <View className={cx('wrapper__top-music__genre')}>
        {genreTop100Music.map((item, index) => {
          return (
            <View
              className={cx('wrapper__top-music__genre__item')}
              key={index}
              onClick={() => {
                setgenreTopMusic(index)
              }}
            >
              <span>{item.title}</span>
            </View>
          )
        })}
      </View>
      <View className={cx('wrapper__top-music__list', { loading: !topMusic.length })}>
        {topMusic.map((item, index) => {
          return (
            <Link to={`/top-100/${item.encodeId}`} className={cx('wrapper__top-music__list__item')} key={index}>
              <View className={cx('wrapper__top-music__list__item__thumbnail')}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className={cx('wrapper__top-music__list__item__thumbnail__image')}
                />
              </View>
              <View className={cx('wrapper__top-music__list__item__title')}>
                <span className={cx('wrapper__top-music__list__item__title__name')}>{item.title}</span>
              </View>
            </Link>
          )
        })}
      </View>
    </View>
  )
}

export default TopMusic
