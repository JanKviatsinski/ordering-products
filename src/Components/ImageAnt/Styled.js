import { Image } from 'antd'
import styled from 'styled-components'

export const ImageStyled = styled(Image)`
border-radius: ${(props) => props.theme.radii.radius1};
max-width: ${(props) => props.maxWidth || '700px'}
    `
// width: ${(props) => props.width || '700px'}
// border-radius: ${(props) => props.theme.radii.radius1};
// padding: ${(props) => props.padding || '0'};
