import { useEffect, useState } from "react";
import { fetchPhotos } from "../../apiService/photo-api";
import toast, { Toaster } from "react-hot-toast";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import SearchBar from "../SearchBar/SearchBar";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

type Photo = {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string;
  color: string;
};

type FetchPhotosResult = {
  results: Photo[];
  total_pages: number;
};

export default function App() {
  const [photo, setPhoto] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalSrc, setModalSrc] = useState<string>("");
  const [modalAlt, setModalAlt] = useState<string>("");

  const handleSearch = async (newQuery: string) => {
    setPhoto([]);
    setPage(1);
    setQuery(newQuery);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    const getPhoto = async () => {
      try {
        setLoading(true);
        setError(false);
        setShowBtn(true);
        const data: FetchPhotosResult = await fetchPhotos(query, page);

        setPhoto((prevPhoto) => [...prevPhoto, ...data.results]);
        setTotalPages(data.total_pages);
        toast.success("Success!", {
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
    };

    getPhoto();
  }, [query, page]);

  const openModal = (src: string, alt: string) => {
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
