import css from "./LoadMoreBtn.module.css";
import { HiCloudDownload } from "react-icons/hi";
export default function LoadMoreBtn({ loadMore }) {
  return (
    <div className={css.container}>
      <button onClick={loadMore} className={css.btn}>
        Show more..
        <HiCloudDownload className={css.icon} />
      </button>
    </div>
  );
}
