import React from "react";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  color: string;
  onModal: (src: string, alt: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  urls,
  alt_description,
  color,
  onModal,
}) => {
  return (
    <li
      className={css.item}
      style={{ backgroundColor: color, borderColor: color }}
    >
      <img
        onClick={() => onModal(urls.regular, alt_description)}
        src={urls.small}
        alt={alt_description}
      />
    </li>
  );
};

export default ImageCard;
