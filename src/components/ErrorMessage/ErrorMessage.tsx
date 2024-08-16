import css from "./ErrorMessage.module.css";
import { TbPhotoCancel } from "react-icons/tb";

const ErrorMessage: React.FC = () => {
  return (
    <div className={css.container}>
      <TbPhotoCancel className={css.icon} />
      <p className={css.text}>
        Sorry for the inconvenience, an error occurred with the service. Please
        reload the page or try again later.
      </p>
    </div>
  );
};

export default ErrorMessage;
