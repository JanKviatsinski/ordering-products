import { Menu } from 'antd'
import 'antd/dist/antd.css'
import styled from 'styled-components'

export const MenuStyled = styled(Menu)`
background-color: ${(props) => props.color || props.theme.colors.primary};
border-radius: ${(props) => props.border_radius || props.theme.radii.radius1};
    `
