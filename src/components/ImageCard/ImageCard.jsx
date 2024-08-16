import css from "./ImageCard.module.css";

export default function ImageCard({ urls, alt_description, color, onModal }) {
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
}
