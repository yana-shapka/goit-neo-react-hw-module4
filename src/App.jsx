import {useState, useEffect} from 'react';
import {fetchImages} from './api/gallery';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import toast, {Toaster} from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [query, setQuery] = useState('');

  const handleSearchSubmit = newQuery => {
    if (query === newQuery) return;

    setImages([]);
    setQuery(newQuery);
  };

  const toggleImageModal = () => {
    setShowModal(previous => !previous);
  };

  const handleImageCard = image => {
    setSelectedImage(image);
    toggleImageModal(true);
  };

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
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  return (
    <div className="appStyle">
      <Toaster position="top-right" />
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} handleImageCard={handleImageCard} />
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={() => setPage(prev => prev + 1)} />
      )}
      {showModal && (
        <ImageModal image={selectedImage} onClose={toggleImageModal} />
      )}
      {isLoading && <Loader />}
    </div>
  );
}

export default App;
