import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import css from './Modal.module.css';

interface ImageModalProps {
  image: {
    urls: {
      full: string;
    };
  } | null;
  isOpen: boolean;
  closeModal: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, isOpen, closeModal }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <button
        className={css.closeBtn}
        onClick={closeModal}
        aria-label="Close Modal"
      >
        <FaTimes />
      </button>
      <img
        src={image.urls.full}
        alt="Selected"
        className={css.modalImage}
      />
    </Modal>
  );
};

export default ImageModal;
