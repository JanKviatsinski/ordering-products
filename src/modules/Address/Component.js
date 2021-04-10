import React from 'react'
import {AddressStyled} from './Styled';
import {Linc} from '../../Components/Linc/Component';
import {PHONE_NUMBER, PHONE_NUMBER_HREF} from '../OwnerData/constants';


export function Address(props){
    return(
        <AddressStyled {...props}>
            <Linc href={PHONE_NUMBER_HREF}>{PHONE_NUMBER}</Linc>
        </AddressStyled>
    )
}
