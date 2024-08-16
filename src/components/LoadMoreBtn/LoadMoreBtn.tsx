import React from "react";
import css from "./LoadMoreBtn.module.css";
import { HiCloudDownload } from "react-icons/hi";

interface LoadMoreBtnProps {
  loadMore: () => void;
}
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ loadMore }) => {
  return (
    <div className={css.container}>
      <button onClick={loadMore} className={css.btn}>
        Show more..
        <HiCloudDownload className={css.icon} />
      </button>
    </div>
  );
};

export default LoadMoreBtn;
