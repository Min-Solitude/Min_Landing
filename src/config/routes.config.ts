import { FunctionComponent, lazy } from 'react'

import mainRoutes from '@/pages/main'

export interface Route {
  path: string
  component: FunctionComponent<any>
  layout: FunctionComponent<any> | null
}

export const routes: Route[] = [
  ...mainRoutes,
  {
    path: '*',
    component: lazy(() => import('../components/shared/NotFound')),
    layout: null
  }
]
