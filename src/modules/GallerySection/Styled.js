import styled from 'styled-components'

export const AllPhotosStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  & img{
  cursor: pointer;
  }
    `
