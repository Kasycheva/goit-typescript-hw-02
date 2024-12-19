import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import css from './Modal.module.css';

interface ImageModalProps {
  image: ImageItem;
  isOpen: boolean;
  closeModal: () => void;
}

Modal.setAppElement('#root');

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
      <button className={css.closeBtn} onClick={closeModal}>
        <FaTimes />
      </button>
      <img src={image.urls.full} alt={image.alt_description} className={css.modalImage} />
    </Modal>
  );
};

export default ImageModal;
