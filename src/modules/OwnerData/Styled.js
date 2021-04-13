import {Card} from 'antd'
import 'antd/dist/antd.css'
import styled from 'styled-components'

export const OwnerDataCardStyled = styled(Card)`
display: flex;
flex-direction: column;
align-items: center;
padding: ${props => props.theme.paddings.padding2};
border-radius: ${props => props.theme.radii.radius0};
&&& a{
display: flex;
justify-content: center;
}
`



