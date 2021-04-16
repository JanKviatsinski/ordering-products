import React from 'react'
import { TitleAnt } from '../../Components/TitleAnt'
import { TypographyAnt } from '../../Components/TypographyAnt'
import { ParagraphAnt } from '../../Components/ParagraphAnt'
import { GREETING_TEXT, GREETING_TITLE_TEXT } from './constants'

export function Greeting() {
  return (
    <TypographyAnt>
      <TitleAnt level={4} text={GREETING_TITLE_TEXT} />

      <ParagraphAnt text={GREETING_TEXT} />
    </TypographyAnt>
  )
}
