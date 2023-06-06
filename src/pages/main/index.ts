import { GlobalLayout } from '@/components/layouts/global'
import { Route } from '@/config'
import React from 'react'

const routes: Route[] = [
  {
    path: '/',
    component: React.lazy(() => import('./Home')),
    layout: GlobalLayout
  }
]

export default routes
