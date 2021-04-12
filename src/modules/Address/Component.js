import React from 'react'
import {AddressStyled} from './Styled';
import {Link} from '../../Components/Link/Component';
import {PHONE_NUMBER, PHONE_NUMBER_HREF, TELEGRAM_HREF} from '../OwnerData/constants';
import telegramImg from '../../Components/Images/telegram.svg'
import {Image} from '../../Components/Image/Component';

export function Address(props){
    return(
        <AddressStyled {...props}>
            <Link href={PHONE_NUMBER_HREF}>{PHONE_NUMBER}</Link>
            <Link href={TELEGRAM_HREF}>
                <Image
                    src={telegramImg}
                    width={'30px'}
                    height={'30px'}
                    alt={'telegram'}
                />
            </Link>
        </AddressStyled>
    )
}
