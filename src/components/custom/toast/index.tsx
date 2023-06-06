import { toast, ToastOptions } from 'react-toastify'

interface ToastType {
  error: () => void
  success: () => void
  warning: () => void
}

const Toast = (message: string): ToastType => {
  const defaultOptions: ToastOptions = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light'
  }

  return {
    error: () => toast.error(`🦄 ${message}`, defaultOptions),
    success: () => toast.success(`🦄 ${message}`, defaultOptions),
    warning: () => toast.warn(`🦄 ${message}`, defaultOptions)
  }
}

export default Toast
