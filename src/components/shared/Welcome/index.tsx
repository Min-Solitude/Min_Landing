import classNames from 'classnames/bind'
import { motion } from 'framer-motion'

import styles from './Welcome.module.scss'
import { View } from '..'
import IonIcon from '@reacticons/ionicons'
import { toast } from 'react-toastify'

const cx = classNames.bind(styles)

const Welcome = () => {
  return (
    <View className={cx('wrapper__welcome')}>
      <h1>Lời chào đến từ Nev.</h1>
      <p>
        Nev là một nền tảng thiết kế website dành cho những nhà thiết kế. Nev cung cấp cho bạn một công cụ để tạo ra.
      </p>
      <motion.button
        className={cx('wrapper__welcome__button')}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          toast.success('Chúc bạn một ngày tốt lành!')
        }}
      >
        <IonIcon name='arrow-forward' className={cx('wrapper__welcome__button__icon')} />
      </motion.button>
    </View>
  )
}

export default Welcome
