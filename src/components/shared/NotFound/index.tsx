import classNames from 'classnames/bind'

import style from './NotFound.module.scss'

const cx = classNames.bind(style)

const NotFound = () => {
  return (
    <div className={cx('wrapper__not-found')}>
      <h1 className={cx('text-gradient')}>404</h1>
    </div>
  )
}

export default NotFound
