import { Field, Form, Formik } from "formik";
import { FcSearch } from "react-icons/fc";
import css from "./SearchBar.module.css";
export default function SearchBar({ onSearch }) {
  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(value, action) => {
        onSearch(value.query);
        action.resetForm();
      }}
    >
      <Form className={css.form}>
        <Field
          className={css.input}
          type="text"
          name="query"
          placeholder="Search image and photo"
        />
        <button type="submit" className={css.inputBtn}>
          <FcSearch className={css.icon} />
        </button>
      </Form>
    </Formik>
  );
}
