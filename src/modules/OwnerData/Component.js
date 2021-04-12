import React from 'react'
import Meta from 'antd/es/card/Meta';
import {OwnerDataCardStyled} from './Styled';
import {Avatar} from '../../Components/Avatar/Component';
import {Address} from '../Address/Component';
import {Image} from '../../Components/Image/Component';
import {
    DESCRIPTION_OWNER,
    NAME_SURNAME_OWNER,
    // PHONE_NUMBER,
    PHONE_NUMBER_HREF,
    TELEGRAM_HREF
} from './constants';
import photoOwner from './../../Components/Images/photoOwner.png'
import {Link} from '../../Components/Link/Component';
import telegramImg from '../../Components/Images/telegram.svg';
import phoneImg from '../../Components/Images/img-phone.svg'
import {AddressStyled} from '../Address/Styled';

export function OwnerDataCard(props) {
    return (
        <OwnerDataCardStyled
            size={'small'}
            hoverable
            cover={
                <Avatar
                    size={64}
                    icon={<Image alt='owner' src={photoOwner}/>}
                />
            }
            actions={[
                <Link href={PHONE_NUMBER_HREF}>
                    <Image
                        src={phoneImg}
                        width={'30px'}
                        height={'30px'}
                        alt={'phone'}
                    />
                </Link>,
                <Link href={TELEGRAM_HREF}>
                    <Image
                        justify={'center'}
                        src={telegramImg}
                        width={'30px'}
                        height={'30px'}
                        alt={'telegram'}
                    />
                </Link>
                // <Address/>
            ]}
        >

            <Meta title={NAME_SURNAME_OWNER} description={DESCRIPTION_OWNER}/>
        </OwnerDataCardStyled>
    )
}
