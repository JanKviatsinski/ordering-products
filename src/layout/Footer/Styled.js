import styled from 'styled-components'

export const FooterStyled = styled.div`
background-color: #001529;
padding: 30px 40px 10px 40px;
    `

export const MenuWrapStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    & > :last-child{
  margin: 0;
  }
`

export const AddressStyled = styled.address`
    display: flex;
    flex-direction: column;
    & > :not(:last-child){
  margin-bottom: 3px;
  }
  & > :last-child{
  margin: 0;
  }
`

export const LinksStyled = styled.div`
display: flex;
justify-content: space-around;
`
