import React, { useEffect } from 'react'
import classNames from 'classnames/bind'

import styles from './Recommend.module.scss'
import { View } from '@/components/shared'
import axios from 'axios'
import { Link } from 'react-router-dom'
import IonIcon from '@reacticons/ionicons'

const cx = classNames.bind(styles)

const Recommend = () => {
  const [page, setPage] = React.useState(1)
  const [newMusicReleased, setnewMusicReleased] = React.useState<any>([])
  const [chillMusic, setChillMusic] = React.useState<any>([])

  useEffect(() => {
    axios.get(`http://localhost:3000/api/home?page=${page}`).then((res) => {
      console.log(res.data.data.items)
      setnewMusicReleased(res.data.data.items[2].items.all)
      setChillMusic(res.data.data.items[3].items)
    })
  }, [page])

  return (
    <View className={cx('wrapper__recommend')}>
      {newMusicReleased ? (
        <>
          <View className={cx('wrapper__recommend__title')}>Nhạc mới phát hành</View>
          <View className={cx('wrapper__recommend__list')}>
            {newMusicReleased &&
              newMusicReleased.map((item: any, index: any) => {
                return (
                  <Link
                    to={`/info-music/${item.encodeId}`}
                    className={cx('wrapper__recommend__list__item')}
                    key={index}
                  >
                    <View className={cx('wrapper__recommend__list__item__image')}>
                      <img src={item.thumbnailM} alt='' />
                    </View>
                    <View className={cx('wrapper__recommend__list__item__info')}>
                      <p className={cx('wrapper__recommend__list__item__info__title')}>{item.title}</p>
                      <span className={cx('wrapper__recommend__list__item__info__singer')}>{item.artistsNames}</span>
                    </View>
                  </Link>
                )
              })}
          </View>
        </>
      ) : (
        <div>Loading...</div>
      )}
      <View className={cx('wrapper__recommend__title')}>Nhạc chill</View>

      {chillMusic ? (
        <View className={cx('wrapper__recommend__list')}>
          {chillMusic &&
            chillMusic.map((item: any, index: any) => {
              return (
                <Link to={`/info-music/${item.encodeId}`} className={cx('wrapper__recommend__list__item')} key={index}>
                  <View className={cx('wrapper__recommend__list__item__image')}>
                    <img src={item.thumbnailM} alt='' />
                  </View>
                  <View className={cx('wrapper__recommend__list__item__info')}>
                    <p className={cx('wrapper__recommend__list__item__info__title')}>{item.title}</p>
                    <span className={cx('wrapper__recommend__list__item__info__singer')}>{item.artistsNames}</span>
                  </View>
                </Link>
              )
            })}
        </View>
      ) : (
        <div>Loading...</div>
      )}

      <View className={cx('wrapper__recommend__change-page')}>
        <button
          className={cx('wrapper__recommend__change-page__btn')}
          onClick={() => {
            if (page > 1) {
              setPage(page - 1)
            }
          }}
        >
          <IonIcon name='arrow-back' className={cx('wrapper__recommend__change-page__btn__icons')} />
        </button>
        <span>{page}</span>
        <button
          className={cx('wrapper__recommend__change-page__btn')}
          onClick={() => {
            setPage(page + 1)
            if (page === 19) setPage(1)
          }}
        >
          <IonIcon name='arrow-forward' className={cx('wrapper__recommend__change-page__btn__icons')} />
        </button>
      </View>
    </View>
  )
}

export default Recommend
