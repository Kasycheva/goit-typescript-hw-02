import { ImageItem } from '../../App';  
import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

interface ImageGalleryProps {
  images: ImageItem[];  
  openModal: (image: ImageItem) => void;  
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li
          key={image.id}
          className={css.galleryItem}
          onClick={() => openModal(image)}
        >
          <ImageCard
            src={image.urls.regular}
            alt={image.alt_description}
            avgColor={image.urls.regular}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
