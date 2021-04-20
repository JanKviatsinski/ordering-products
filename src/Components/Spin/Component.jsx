import React from 'react'
// import { ModalStyled } from './Styled'
import { Spin as SpinAnt, Space } from 'antd'

export function Spin() {
  return (
    <Space size="large">
      <SpinAnt />
      <SpinAnt />
      <SpinAnt />
    </Space>
  )
}
// удалить STYLeD
