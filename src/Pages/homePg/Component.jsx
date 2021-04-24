import React from 'react'
import {
  CHEESE_TEXT,
  CHEESE_TITLE_TEXT,
  cheesePhoto,
  CURD_TEXT,
  CURD_TITLE_TEXT,
  curdPhoto,
  MILK_TEXT,
  MILK_TITLE_TEXT,
  milkPhoto,
} from './constants'
import { HomeSection } from '../../modules/HomeSection'
import { HomePgStyled } from './Styled'
import { Title } from '../../Components/Title'

export function HomePg() {
  return (
    <HomePgStyled>
      <Title level={2} text="Welcome!" />
      <HomeSection
        title={CHEESE_TITLE_TEXT}
        text={CHEESE_TEXT}
        photoSrc={cheesePhoto}
        reverse={false}
      />

      <HomeSection
        title={MILK_TITLE_TEXT}
        text={MILK_TEXT}
        photoSrc={milkPhoto}
        reverse
      />

      <HomeSection
        title={CURD_TITLE_TEXT}
        text={CURD_TEXT}
        photoSrc={curdPhoto}
        reverse={false}
      />
    </HomePgStyled>
  )
}
