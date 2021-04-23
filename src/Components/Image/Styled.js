import styled from 'styled-components'

export const ImageStyled = styled.img`
   display: block;
   width: ${(props) => props.width || '20px'};
   border-radius: ${(props) => props.theme.radii.radius1};
   height: 100%;
    `
