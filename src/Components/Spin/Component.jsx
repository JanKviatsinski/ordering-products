import React from 'react'
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
