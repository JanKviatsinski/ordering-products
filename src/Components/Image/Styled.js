import styled from 'styled-components'

export const ImageStyled = styled.img`
   display: flex;
   width: ${props => props.width || '20px'};
   height: ${props => props.height || '20px'};
    `
