import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ photo, onModal }) {
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
}
