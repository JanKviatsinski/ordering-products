import styled from 'styled-components'

export const Wrap = styled.div`
background-color: ${(props) => props.theme.colors.primary};
padding: ${(props) => props.theme.paddings.padding3};
flex-grow: 1;
&&& *{
color: ${(props) => props.theme.colors.fontColor1};
}

&&& input,
&&& span{
color: ${(props) => props.theme.colors.fontColor2};
}
`
