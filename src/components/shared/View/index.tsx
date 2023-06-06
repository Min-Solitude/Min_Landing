import React from 'react'
import { MotionProps, motion } from 'framer-motion'

type CustomPropsDiv = Omit<React.HTMLProps<HTMLDivElement>, 'ref'>

type Props = CustomPropsDiv &
  MotionProps & {
    children: React.ReactNode
  }

export function View({ children, ...rest }: Props) {
  return (
    <motion.div aria-hidden {...rest}>
      {children}
    </motion.div>
  )
}
