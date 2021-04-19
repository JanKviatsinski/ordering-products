import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Modal } from 'antd'
import { registration } from '../api/registration'
import { authentication } from '../api/authentication'
import { history } from '../history'
import { PATH_HOME } from '../pathes'
// import { SHOW_MODAL } from './modalActions'

function confirm() {
  Modal.confirm({
    title: 'Confirm',
    // eslint-disable-next-line react/jsx-filename-extension,react/react-in-jsx-scope
    icon: <ExclamationCircleOutlined />,
    content: 'Bla bla ...',
    okText: 'ff',
    cancelText: 'we',
  })
}

const MODULE_NAME = 'UserData'
export const USER_IS_LOGGED = `${MODULE_NAME}/USER_IS_LOGGED`

export function onSubmitRegistration({ password, email, displayName }) {
  return async (dispatch) => {
    const responseRegistration = await registration(
      { password, email, displayName },
    )
    const resultRegistration = await responseRegistration.json()
    const { idToken } = resultRegistration
    // const localId = resultRegistration.localId

    if (idToken !== undefined) {
      history.push(PATH_HOME)
      console.log('YES')
      return dispatch({
        type: USER_IS_LOGGED,
        payload: {
          password, email, displayName, idToken,
        },
      })
    }
    console.log('ERROR')
    confirm()
    // return dispatch({
    //   type: SHOW_MODAL,
    //   payload: {
    //     title: 'Error',
    //     data: 'eeeeerrrrooooorrrr',
    //   },
    // })
    return false
  }
}

export function onSubmitAuthentication({ email, password }) {
  return async (dispatch) => {
    const responseAuthentication = await authentication(email, password)
    const resultAuthentication = await responseAuthentication.json()
    const { idToken, displayName } = resultAuthentication
    // const localId = resultRegistration.localId

    if (idToken !== undefined) {
      console.log('yes', displayName, idToken)
      history.push(PATH_HOME)
      return dispatch({
        type: USER_IS_LOGGED,
        payload: {
          password, email, displayName, idToken,
        },
      })
    }
    console.log('ERROR')
    return false
  }
}

// const localId = resultRegistration.localId

// const responseDataUser = await getUserData(idToken)
// const resultDataUser = await responseDataUser.json()
//
// console.log(resultDataUser)
