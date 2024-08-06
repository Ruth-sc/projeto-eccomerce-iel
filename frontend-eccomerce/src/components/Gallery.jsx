import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../css/Gallery.css'; 

const Gallery = ({ className, width, height, images, }) => {
  const [currentIndex, setCurrentIndex,] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  
 

  return (
    <div className={`gallery ${className}`} style={{ width, height }}>
      <div className="gallery-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={imageList}
            alt={`Image ${index + 1}`}
            className="gallery-image"
            style={{ width, height }}
          />
        ))}
      </div>
      <button
        className="gallery-arrow gallery-arrow-left"
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        <img src="assets/arrow-left.svg" alt="" />
      </button>
      <button
        className="gallery-arrow gallery-arrow-right"
        onClick={handleNext}
        disabled={currentIndex === images.length - 1}
      >
        <img src="assets/arrow-right.svg" alt="" />
      </button>
    </div>
  );
};

Gallery.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};



export default Gallery;
