import { Typography } from 'antd';
import 'antd/dist/antd.css'
import styled from 'styled-components'
const { Link } = Typography;

export const LinkStyled = styled(Link)`
 display: flex;
 justify-content: center;
    `

// justify-content: ${props => props.justify || null};
