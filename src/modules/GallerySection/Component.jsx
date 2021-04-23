import React, { useRef } from 'react'
import { Carousel } from 'antd'
import 'antd/dist/antd.css'
import { Title } from '../../Components/Title'
import { Typography } from '../../Components/Typography'
import { Paragraph } from '../../Components/Paragraph'
import { ImageAnt } from '../../Components/ImageAnt'
import { AllPhotosStyled } from './Styled'
import { Image } from '../../Components/Image'

export function GallerySection(props) {
  const ref = useRef()

  function onClickPhoto(e) {
    if (e.target.tagName === 'IMG') {
      ref.current.goTo(e.target.id)
    }
  }

  return (
    <>
      <Typography>
        <Title level={4} text={props.title} />
        <Paragraph text={props.text} />
      </Typography>

      <Carousel
        ref={ref}
        dots={false}
      >
        {
          props.photos.map((photoSrc) => (
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
          props.photos.map((photoSrc, index) => (
            <Image
              id={index}
              // data-x="ccc"
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
