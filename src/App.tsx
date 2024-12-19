import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { getPhotos } from './components/ApiService/Photos';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Loader from './components/Loader/Loader';
import ImageModal from './components/ImageModal/Modal';

interface Image {
  id: string;
  urls: {
    regular: string;
    full: string;
  };
  alt_description: string;
}

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<Image | null>(null);

  const fetchImages = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getPhotos(query, page);
      if (data.results.length > 0) {
        setImages((prevImages) => [...prevImages, ...data.results]);
        setHasMore(data.results.length > 0);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      setError('Failed to load images. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query && page > 0) {
      fetchImages();
    }
  }, [query, page]);

  const handleLoadMore = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const openModal = (image: Image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  const getNewQuery = (newQuery: string) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setHasMore(true);
  };

  return (
    <div className="appContainer">
      <SearchBar setQuery={getNewQuery} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} openModal={openModal} />
      {loading && <Loader />}
      {!loading && hasMore && images.length > 0 && (
        <LoadMoreBtn loadMore={handleLoadMore} />
      )}
      {!hasMore && !loading && <p>No more images to load</p>}
      {isModalOpen && modalImage && (
        <ImageModal image={modalImage} isOpen={isModalOpen} closeModal={closeModal} />
      )}
    </div>
  );
}

export default App;
