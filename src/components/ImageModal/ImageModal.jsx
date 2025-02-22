import Modal from 'react-modal';
import css from './ImageModal.module.css';
import {IoClose} from 'react-icons/io5';
import {AiFillHeart} from 'react-icons/ai';

const ImageModal = ({image, onClose}) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={css.imageModal}
      overlayClassName={css.imageModalOverlay}
      ariaHideApp={false}
    >
      <button className={css.closeButton} onClick={onClose}>
        <IoClose />
      </button>
      <div className={css.modalContent}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={css.fullImage}
        />
        <p className={css.imageDescription}>
          {image.description || 'No description available'}
        </p>
        <p className={css.imageLikes}>
          <AiFillHeart className={css.heartIcon} /> {image.likes} likes
        </p>
      </div>
    </Modal>
  );
};

export default ImageModal;
