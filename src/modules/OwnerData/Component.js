import React from 'react'
import Meta from 'antd/es/card/Meta';
import {OwnerDataCardStyled} from './Styled';
import {Avatar} from '../../Components/Avatar/Component';
import {Image} from '../../Components/Image/Component';
import {
    DESCRIPTION_OWNER,
    NAME_SURNAME_OWNER,
    PHONE_NUMBER_HREF_OWNER,
    TELEGRAM_HREF_OWNER
} from './constants';
import photoOwner from './../../Components/Images/photoOwner.png'
import {Link} from '../../Components/Link/Component';
import telegramImg from '../../Components/Images/telegram.svg';
import phoneImg from '../../Components/Images/img-phone.svg'

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
                <Link href={PHONE_NUMBER_HREF_OWNER}>
                    <Image
                        src={phoneImg}
                        alt={'phone'}
                    />
                </Link>,
                <Link href={TELEGRAM_HREF_OWNER}>
                    <Image
                        src={telegramImg}
                        alt={'telegram'}
                    />
                </Link>
            ]}
        >

            <Meta title={NAME_SURNAME_OWNER} description={DESCRIPTION_OWNER}/>
        </OwnerDataCardStyled>
    )
}
