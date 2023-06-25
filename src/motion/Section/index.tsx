import { useInView } from 'framer-motion'
import React, { useRef } from 'react'
import classNames from 'classnames/bind'

import styles from './Section.module.scss'

interface sectionProps {
  children: React.ReactNode
}

const cx = classNames.bind(styles)

const Section = ({ children }: sectionProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className={cx('wrapper__section')}>
      <span
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}
      >
        {children}
      </span>
    </section>
  )
}

export default Section
