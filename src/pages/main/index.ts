import { GlobalLayout } from '@/components/layouts/global'
import { Route } from '@/config'
import React from 'react'

const routes: Route[] = [
  {
    path: '/',
    component: React.lazy(() => import('./Home')),
    layout: GlobalLayout
  },
  {
    path: '/QRCode',
    component: React.lazy(() => import('./Qrcode')),
    layout: GlobalLayout
  },
  {
    path: '/benga',
    component: React.lazy(() => import('./Benga')),
    layout: null
  }
]

export default routes
