import styled from 'styled-components'

export const Wrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: ${(props) => props.theme.paddings.padding2};
background-color: ${(props) => (props).theme.colors.backgroundColorPrimary || null};
    `
