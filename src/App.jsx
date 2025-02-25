import {useState} from 'react';
import toast, {Toaster} from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';

function App() {
  const [query, setQuery] = useState('');

  const handleSearchSubmit = newQuery => {
    if (query === newQuery) return;
    setQuery('');
    setQuery(newQuery);
  };

  return (
    <div className="appStyle">
      <Toaster position="top-right" />
      <SearchBar onSubmit={handleSearchSubmit} />
      <ImageGallery query={query} />
    </div>
  );
}

export default App;
