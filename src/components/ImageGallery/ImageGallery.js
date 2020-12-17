import React from 'react'
import PropTypes from 'prop-types'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css'

const ImageGallery = ({ images, openModal }) => {
    return (
      <ul className={s.ImageGallery}>
        {images.map((el) => (
          <ImageGalleryItem
            key={el.id}
            url={el.webformatURL}
            alt={el.tags}
            modalImage={el.largeImageURL}
            openModal={openModal}
           />
        ))}
      </ul>
    );
};
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
