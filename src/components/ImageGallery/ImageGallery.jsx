import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({images, handleImageCard}) => {
  return (
    <ul className={css.galleryList}>
      {images.map(image => (
        <ImageCard
          key={image.id}
          image={image}
          onClick={() => handleImageCard(image)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
