import React from 'react'
import {AddressStyled} from './Styled';
import {Linc} from '../../Components/Linc/Component';
import {PHONE_NUMBER, PHONE_NUMBER_HREF, TELEGRAM_HREF} from '../OwnerData/constants';
import telegramSvg from '../../Components/Images/telegram.svg'
import {Image} from '../../Components/Image/Component';

export function Address(props){
    return(
        <AddressStyled {...props}>
            <Linc href={PHONE_NUMBER_HREF}>{PHONE_NUMBER}</Linc>
            <Linc href={TELEGRAM_HREF}>
                <Image
                    src={telegramSvg}
                    width={'30px'}
                    height={'30px'}
                    alt={'telegram'}
                />
            </Linc>
        </AddressStyled>
    )
}
