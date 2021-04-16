import { Form } from 'antd'
import 'antd/dist/antd.css'
import styled from 'styled-components'

export const FormStyled = styled(Form)`
display: flex;
flex-direction: column;
padding: ${(props) => props.theme.paddings.padding3 || null};
    `
