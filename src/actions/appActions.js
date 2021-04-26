import { Modal } from 'antd'

const MODULE_NAME = 'APP'
export const CLOSE_MODAL = `${MODULE_NAME}/CLOSE MODAL`
export const SHOW_MODAL = `${MODULE_NAME}/SHOW MODAL`
export const SPIN_ON = `${MODULE_NAME}/SPIN ON`
export const SPIN_OFF = `${MODULE_NAME}/SPIN OFF`

export function activeModalStatus({ modalStatus, modalTitle, modalContent }) {
  return {
    type: SHOW_MODAL,
    payload: {
      modalStatus,
      modalTitle,
      modalContent,
    },
  }
}

export function hideModal() {
  // Modal.destroyAll() можно перенести в функцию showModal
  // но я не понял как, англиского нехватает
  Modal.destroyAll()
  return {
    type: CLOSE_MODAL,
  }
}

export function spinOn() {
  return (
    {
      type: SPIN_ON,
    }
  )
}

export function spinOff() {
  return (
    {
      type: SPIN_OFF,
    }
  )
}
