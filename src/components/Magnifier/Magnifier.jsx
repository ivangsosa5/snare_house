import React from 'react';
import { MagnifierContainer, MagnifierZoom, MagnifierPreview } from 'react-image-magnifiers';

export const ImageMagnifier = ({ smallImage, largeImage }) => {
  return (
    <MagnifierContainer>
      <MagnifierPreview style={{ width: '920px', height: '640px' }} imageSrc={smallImage} />
      <MagnifierZoom
        imageSrc={largeImage}
        imageAlt="Zoomed Image"
        magnifierSize="30%"
        style={{ width: '400px', height: '400px' }}
      />
    </MagnifierContainer>
  );
};