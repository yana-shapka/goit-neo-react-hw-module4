import {useState, useEffect} from 'react';
import {fetchImages} from '../../api/gallery';
import ImageCard from '../ImageCard/ImageCard';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import css from './ImageGallery.module.css';

const ImageGallery = ({query}) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchImages(query, page);

        if (data.length === 0) {
          setError('No images found');
          return;
        }

        setImages(prevImages => (page === 1 ? data : [...prevImages, ...data]));
        setTotalResults(data.total);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  return (
    <>
      {error && <ErrorMessage message={error} />}
      <ul className={css.galleryList}>
        {images.map(image => (
          <ImageCard
            key={image.id}
            image={image}
            onClick={() => {
              setSelectedImage(image);
              setShowModal(true);
            }}
          />
        ))}
      </ul>
      {isLoading && <Loader />}
      {images.length > 0 && images.length < totalResults && !isLoading && (
        <LoadMoreBtn onClick={() => setPage(prev => prev + 1)} />
      )}
      {showModal && (
        <ImageModal image={selectedImage} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default ImageGallery;
