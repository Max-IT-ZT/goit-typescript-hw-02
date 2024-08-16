import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface Photo {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string;
  color: string;
}

interface ImageGalleryProps {
  photo: Photo[];
  onModal: (src: string, alt: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ photo, onModal }) => {
  return (
    <ul className={css.list}>
      {photo.map((photos) => (
        <ImageCard
          key={photos.id}
          urls={photos.urls}
          alt_description={photos.alt_description}
          color={photos.color}
          onModal={onModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
