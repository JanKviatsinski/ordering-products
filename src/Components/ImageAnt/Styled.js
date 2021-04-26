import { Image } from 'antd'
import styled from 'styled-components'

export const ImageStyled = styled(Image)`
border-radius: ${(props) => props.theme.radii.radius1};
max-width: ${(props) => props.maxwidth || '700px'}
    `
