import React, { FunctionComponent } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type ContainerProps = {
  children?: React.ReactNode
}

export const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return (
    <React.Fragment>
      {children}
      <ToastContainer />
    </React.Fragment>
  )
}
