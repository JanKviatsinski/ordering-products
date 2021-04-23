import { Modal } from 'antd'

export function modalError({ modalTitle, modalContent, hideModal }) {
  Modal.error({
    title: modalTitle,
    content: modalContent,
    onOk: hideModal,
  })
}

export function modalSuccess({ modalTitle, modalContent, hideModal }) {
  Modal.success({
    title: modalTitle,
    content: modalContent,
    onOk: hideModal,
  })
}

export function modalInfo({ modalTitle, modalContent, hideModal }) {
  Modal.info({
    title: modalTitle,
    content: modalContent,
    onOk: hideModal,
  })
}
