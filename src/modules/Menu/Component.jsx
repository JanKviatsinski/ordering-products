import React from 'react'
import { Menu } from 'antd'
import {
  SettingOutlined,
} from '@ant-design/icons'
// eslint-disable-next-line import/named
import { MenuItems } from '../../Components/MenuItem'

const { SubMenu } = Menu

export function MenuCmp({ selectMenuKey }) {
  const handleClick = (e) => {
    console.log('click ', e)
    selectMenuKey(e)
  }
  return (
    <Menu onClick={handleClick} mode="vertical">
      <MenuItems key="mail">
        Navigation One
      </MenuItems>
      <SubMenu
        key="SubMenu"
        icon={<SettingOutlined />}
        title="Navigation Three - Submenu"
      />
      <Menu.Item key="alipay">
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      </Menu.Item>
    </Menu>
  )
}

// onClick={selectMenuKey}
// selectedKeys={[selectedKey]}
