import React from "react";
import styles from "./Form.module.css";
import useSelect from "../hooks/useSelect";
import PropTypes from "prop-types";

const Form = ({ setCategory }) => {
  // Options
  const OPTIONS = [
    { value: "general", label: "General" },
    { value: "health", label: "Health" },
    { value: "science", label: "Science" },
    { value: "sports", label: "Sports" },
    { value: "technology", label: "Technology" },
    { value: "business", label: "Business" },
    { value: "entertainment", label: "Entertainment" },
  ];

  // use custom hook
  const [category, SelectNew] = useSelect("technology", OPTIONS);

  // when de user click in submit, pass category to app.js
  const handleSubmit = (e) => {
    e.preventDefault();
    setCategory(category);
  };

  return (
    <div className={`${styles.buscador}  row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={handleSubmit}>
          <h2 className={styles.heading}>Find new by category!</h2>
          <SelectNew />

          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles.btnblock} btn-large amber darken-2`}
              value="Search"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
Form.propTypes = {
  setCategory: PropTypes.func.isRequired
}
export default Form;
