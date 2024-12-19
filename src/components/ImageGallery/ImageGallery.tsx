import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

interface Image {
  alt_description: string;
  urls: { regular: string };
  id: string;
  user: string;
  likes: number;
}

interface ImageGalleryProps {
  images: Image[];
  openModal: (image: Image) => void;
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
