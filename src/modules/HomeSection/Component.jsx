import React from 'react'
import 'antd/dist/antd.css'
import { Title } from '../../Components/Title'
import { Typography } from '../../Components/Typography'
import { Paragraph } from '../../Components/Paragraph'
import { ImageAnt } from '../../Components/ImageAnt'
import { HomeSectionStyled } from './Styled'

export function HomeSection(
  {
    title,
    text,
    photoSrc,
    reverse,
  },
) {
  if (reverse) {
    return (
      <HomeSectionStyled>
        <ImageAnt
          key={photoSrc}
          padding="50px"
          width={250}
          maxwidth="400px"
          src={photoSrc}
        />

        <Typography
          maxwidth="500px"
        >
          <Title level={4} text={title} />
          <Paragraph text={text} />
        </Typography>
      </HomeSectionStyled>
    )
  }

  return (
    <HomeSectionStyled>
      <Typography
        maxwidth="500px"
      >
        <Title level={4} text={title} />
        <Paragraph text={text} />
      </Typography>

      <ImageAnt
        key={photoSrc}
        padding="50px"
        width={250}
        maxwidth="400px"
        src={photoSrc}
      />
    </HomeSectionStyled>
  )
}
