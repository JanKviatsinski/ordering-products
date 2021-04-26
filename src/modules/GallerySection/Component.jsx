import React, { useRef } from 'react'
import { Carousel } from 'antd'
import 'antd/dist/antd.css'
import { Title } from '../../Components/Title'
import { Typography } from '../../Components/Typography'
import { Paragraph } from '../../Components/Paragraph'
import { ImageAnt } from '../../Components/ImageAnt'
import { AllPhotosStyled } from './Styled'
import { Image } from '../../Components/Image'

export function GallerySection({ title, text, photos }) {
  const ref = useRef()

  const onClickPhoto = (e) => {
    if (e.target.tagName === 'IMG') {
      ref.current.goTo(e.target.id)
    }
  }

  return (
    <>
      <Typography>
        <Title level={4} text={title} />
        <Paragraph text={text} />
      </Typography>

      <Carousel
        ref={ref}
        dots={false}
      >
        {
          photos.map((photoSrc) => (
            <ImageAnt
              key={photoSrc}
              padding="50px"
              width={800}
              src={photoSrc}
            />
          ))
        }
      </Carousel>

      <AllPhotosStyled onClick={onClickPhoto}>
        {
          photos.map((photoSrc, index) => (
            <Image
              id={index}
              key={photoSrc}
              width="100%"
              src={photoSrc}
            />
          ))
        }
      </AllPhotosStyled>
    </>
  )
}
