import { useEffect, useState } from "react";
import { fetchPhotos } from "../../apiService/photo-api";
import toast, { Toaster } from "react-hot-toast";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import SearchBar from "../SearchBar/SearchBar";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
export default function App() {
  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalSrc, setModalSrc] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  console.log("totalPages: ", totalPages);
  console.log("photo: ", photo);

  const handleSearch = async (newQuery) => {
    setPhoto([]);
    setPage(1);
    setQuery(newQuery);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    if (!query) {
      return;
    }
    async function getPhoto() {
      try {
        setLoading(true);
        setError(false);
        setShowBtn(true);
        const data = await fetchPhotos(query, page);

        setPhoto((prevPhoto) => {
          return [...prevPhoto, ...data.results];
        });
        setTotalPages(data.total_pages);
        toast.success("Seccess!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      } catch (error) {
        toast.error("Error!!!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getPhoto();
  }, [query, page]);

  const openModal = (src, alt) => {
    setModalSrc(src);
    setModalAlt(alt);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setModalAlt("");
    setModalSrc("");
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {photo.length > 0 && <ImageGallery photo={photo} onModal={openModal} />}
      {page < totalPages && showBtn && !loading && (
        <LoadMoreBtn loadMore={handleLoadMore} />
      )}
      {error && <ErrorMessage />}
      <ImageModal
        modalIsOpen={showModal}
        closeModal={closeModal}
        src={modalSrc}
        alt={modalAlt}
      />
      <Toaster />
    </div>
  );
}
