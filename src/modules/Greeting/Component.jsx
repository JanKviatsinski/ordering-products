import React from 'react'
import { Title } from '../../Components/Title'
import { Typography } from '../../Components/Typography'
import { Paragraph } from '../../Components/Paragraph'
import { GREETING_TEXT, GREETING_TITLE_TEXT } from './constants'

export function Greeting() {
  return (
    <Typography>
      <Title level={4} text={GREETING_TITLE_TEXT} />

      <Paragraph text={GREETING_TEXT} />
    </Typography>
  )
}
