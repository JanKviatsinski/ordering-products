import React from 'react'
import { GallerySection } from '../../modules/GallerySection'
import {
  COW_PHOTOS_TEXT,
  COW_PHOTOS_TITLE_TEXT,
  cowPhotos, PRODUCTS_PHOTOS_TEXT,
  PRODUCTS_PHOTOS_TITLE_TEXT, productsPhotos,
} from './constants'
import { GalleryPgStyled } from './Styled'

export function GalleryPg() {
  return (
    <GalleryPgStyled>
      <GallerySection
        title={PRODUCTS_PHOTOS_TITLE_TEXT}
        text={PRODUCTS_PHOTOS_TEXT}
        photos={productsPhotos}
      />

      <GallerySection
        title={COW_PHOTOS_TITLE_TEXT}
        text={COW_PHOTOS_TEXT}
        photos={cowPhotos}
      />
    </GalleryPgStyled>
  )
}
