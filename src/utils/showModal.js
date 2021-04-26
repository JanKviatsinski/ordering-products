import { Modal } from 'antd'

export const MODAL_STATUS_ERROR = 'ERROR'
export const MODAL_STATUS_SUCCESS = 'SUCCESS'
export const MODAL_STATUS_INFO = 'INFO'

export function showModal(
  {
    modalStatus,
    modalTitle,
    modalContent,
    hideModal,
  },
) {
  switch (modalStatus) {
    case MODAL_STATUS_SUCCESS:
      Modal.success({
        title: modalTitle,
        content: modalContent,
        onOk: hideModal,
      })
      break
    case MODAL_STATUS_ERROR:
      Modal.error({
        title: modalTitle,
        content: modalContent,
        onOk: hideModal,
      })
      break
    case MODAL_STATUS_INFO:
      Modal.info({
        title: modalTitle,
        content: modalContent,
        onOk: hideModal,
      })
      break
    default:
      break
  }
}
