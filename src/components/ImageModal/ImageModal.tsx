import Modal from "react-modal";
import { RemoveScroll } from "react-remove-scroll";

type ImageModalProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
  src: string;
  alt: string;
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: "2",
  },
};

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({
  modalIsOpen,
  closeModal,
  src,
  alt,
}) => {
  return (
    <div>
      <RemoveScroll enabled={modalIsOpen}>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <img src={src} alt={alt} />
        </Modal>
      </RemoveScroll>
    </div>
  );
};
export default ImageModal;
