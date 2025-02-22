import css from './ImageCard.module.css';

const ImageCard = ({image, onClick}) => {
  return (
    <li className={css.imageCard} onClick={onClick}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.image}
      />
    </li>
  );
};

export default ImageCard;
