import React from 'react'
import PropTypes from 'prop-types'
import s from './ImageGalleryItem.module.css'


const ImageGalleryItem = ({ url, alt, openModal, modalImage }) => {
  return (
    <li onClick = {() => openModal(modalImage)}className={s.ImageGalleryItem}>
  <img src={url} alt={alt} className={s.ImageGalleryItem_image} />
</li>
  )
}

ImageGalleryItem.propTypes = {
  openModal: PropTypes.func.isRequired,
  modalImage: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;