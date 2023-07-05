import classNames from 'classnames/bind'
import QRCode from 'react-qr-code'
import html2canvas from 'html2canvas'

import styles from './Qrcode.module.scss'

import { View } from '@/components/shared'
import { useRef, useState } from 'react'

const cx = classNames.bind(styles)

interface QrcodeProps {
  value: string
}

const Qrcode = ({ value }: QrcodeProps) => {
  const [text, setText] = useState('')
  const qrCodeRef = useRef<HTMLDivElement>(null)

  const handleDownload = () => {
    if (qrCodeRef.current) {
      html2canvas(qrCodeRef.current).then((canvas) => {
        const link = document.createElement('a')
        link.download = 'qrcode.png'
        link.href = canvas.toDataURL('image/png')
        link.click()
      })
    }
  }

  return (
    <View className={cx('wrapper__qrcode')}>
      <View className={cx('wrapper__qrcode__inner')}>
        <View className={cx('wrapper__qrcode__inner__title')}>
          <h1>QR Code Generator</h1>
          <p></p>
        </View>
        <div className={cx('wrapper__qrcode__inner__qrcode')} ref={qrCodeRef}>
          <QRCode value={value || text} />
        </div>
        <input
          type='text'
          className={cx('wrapper__qrcode__inner__create')}
          placeholder='Enter your text'
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button onClick={handleDownload}>Dowload</button>
      </View>
    </View>
  )
}

export default Qrcode
