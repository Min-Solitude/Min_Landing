import classNames from 'classnames/bind'

import styles from './Technology.module.scss'
import { View } from '@/components/shared'
import Example from '@/motion/Exmaple'

const cx = classNames.bind(styles)

const Technology = () => {
  return (
    <View className={cx('wrapper__teachnology')} id='technology'>
      <div className={cx('wrapper__teachnology__title')}>
        <h1>Sự phát triển mới.</h1>
        <p>
          Hệ thống cung cấp dịch vụ Nev là một dịch vụ hoàn toàn mới tại thị trường Việt Nam. Đây là dịch vụ sẽ lớn mạnh
          trong tương lai, chắc vậy.
        </p>
      </div>
      <div className={cx('wrapper__teachnology__content')}>
        <Example />
      </div>
    </View>
  )
}

export default Technology
