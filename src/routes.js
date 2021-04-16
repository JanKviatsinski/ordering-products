import { NotFoundPg } from './Pages/notFoundPage'
import { IdentificationContainer } from './modules/Identification'

export const routes = [
  {
    path: '/',
    title: 'Home',
    isExact: true,
    component: NotFoundPg,
  },
  {
    path: '/orderForm',
    title: 'Order form',
    isExact: true,
    component: NotFoundPg,
  },
  {
    path: '/gallery',
    title: 'Gallery',
    isExact: true,
    component: NotFoundPg,
  },
  {
    path: '/identification',
    title: 'Authentication',
    isExact: false,
    component: IdentificationContainer,
  },
]
