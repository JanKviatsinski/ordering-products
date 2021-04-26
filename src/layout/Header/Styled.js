import { Layout } from 'antd'
import 'antd/dist/antd.css'
import styled from 'styled-components'

const { Header } = Layout

export const HeaderStyled = styled(Header)`
   display: flex;
   flex-direction: row;
   height: 100%;
    `

export const MenuWrapStyled = styled.div`
     display: flex;
     flex-direction: row;
     width: 100%;
     justify-content: space-between;
    `
