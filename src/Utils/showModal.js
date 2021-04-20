import { Modal } from 'antd'

export function modalError({ modalTitle, modalContent }) {
  Modal.error({
    title: modalTitle,
    content: modalContent,
  })
}

export function modalSuccess({ modalTitle, modalContent }) {
  Modal.success({
    title: modalTitle,
    content: modalContent,
  })
}
