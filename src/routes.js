import { NotFoundPg } from './Pages/notFoundPage'
import { IdentificationContainer } from './modules/Identification'
import {
  PATH_HOME,
  PATH_ORDER_FORM,
  PATH_GALLERY,
  PATH_REGISTRATION,
} from './pathes'

export const routes = [
  {
    path: PATH_HOME,
    title: 'Home',
    isExact: true,
    component: NotFoundPg,
  },
  {
    path: PATH_ORDER_FORM,
    title: 'Order form',
    isExact: true,
    component: NotFoundPg,
  },
  {
    path: PATH_GALLERY,
    title: 'Gallery',
    isExact: true,
    component: NotFoundPg,
  },
  {
    path: PATH_REGISTRATION,
    title: 'Registration',
    isExact: false,
    component: IdentificationContainer,
  },
]
