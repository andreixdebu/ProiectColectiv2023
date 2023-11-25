import React from 'react';
import Image from '../Homepage/images/presentationimage-1.png'

const PresentationImage = () => {
  return (
    <div className="image-section">
      <img src={Image} alt="Presentation" />
    </div>
  );
}

export default PresentationImage;
