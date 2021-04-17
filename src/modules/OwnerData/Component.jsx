import React from 'react'
import Meta from 'antd/es/card/Meta'
import { OwnerDataCardStyled } from './Styled'
import { Avatar } from '../../Components/Avatar'
import { Image } from '../../Components/Image'
import { Link } from '../../Components/Link'
import {
  DESCRIPTION_OWNER,
  NAME_SURNAME_OWNER,
  PHONE_NUMBER_HREF_OWNER,
  TELEGRAM_HREF_OWNER,
} from './constants'
import photoOwner from '../../Components/Images/photoOwner.png'
import telegramImg from '../../Components/Images/telegram.svg'
import phoneImg from '../../Components/Images/img-phone.svg'

export function OwnerDataCard() {
  return (
    <OwnerDataCardStyled
      size="small"
      cover={(
        <Avatar
          size={64}
          icon={<Image alt="owner" src={photoOwner} />}
        />
      )}
      actions={[
        <Link href={PHONE_NUMBER_HREF_OWNER}>
          <Image
            src={phoneImg}
            alt="phone"
          />
        </Link>,
        <Link href={TELEGRAM_HREF_OWNER}>
          <Image
            src={telegramImg}
            alt="telegram"
          />
        </Link>,
      ]}
    >

      <Meta title={NAME_SURNAME_OWNER} description={DESCRIPTION_OWNER} />
    </OwnerDataCardStyled>
  )
}
