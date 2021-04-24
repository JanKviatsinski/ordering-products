import { Typography } from 'antd'
import 'antd/dist/antd.css'
import styled from 'styled-components'

export const TypographyStyled = styled(Typography)`
max-width: ${(props) => props.maxWidth || ''}
    `
