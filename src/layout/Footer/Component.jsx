import React from 'react'
import {
  AddressStyled,
  FooterStyled,
  LinksStyled,
  MenuWrapStyled,
} from './Styled'
import { Menu } from '../../modules/Menu'
import { Link } from '../../Components/Link'
import {
  PHONE_NUMBER,
  PHONE_NUMBER_HREF_OWNER,
  TELEGRAM_HREF_OWNER,
} from '../../modules/OwnerData/constants'
import { Image } from '../../Components/Image'
import phoneImg from '../../Components/Images/img-phone.svg'
import telegramImg from '../../Components/Images/telegram.svg'
import { Paragraph } from '../../Components/Paragraph'

export function Footer() {
  return (
    <FooterStyled>
      <MenuWrapStyled>
        <Menu
          mode="horizontal"
        />

        <AddressStyled>
          <LinksStyled>
            <Link href={PHONE_NUMBER_HREF_OWNER}>
              <Image
                src={phoneImg}
                alt="phone"
              />
            </Link>

            <Link href={TELEGRAM_HREF_OWNER}>
              <Image
                src={telegramImg}
                alt="telegram"
              />
            </Link>
          </LinksStyled>

          <Paragraph text={PHONE_NUMBER} />
          <Paragraph text="Country" />
          <Paragraph text="Address 15a" />
        </AddressStyled>
      </MenuWrapStyled>

      <time dateTime="2021">© 2021 Happy farm</time>
    </FooterStyled>
  )
}
