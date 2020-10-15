import React, { useState } from "react";
import PropTypes from "prop-types";
const useSelect = (initialState, options) => {
  // state from custom hook
  const [state, setState] = useState(initialState);

  const SelectNews = () => (
    <select
      className="browser-default"
      value={state}
      onChange={(e) => setState(e.target.value)}
    >
      {options.map((options) => (
        <option key={options.value} value={options.value}>
          {options.label}
        </option>
      ))}
    </select>
  );

  return [state, SelectNews];
};
useSelect.propTypes = {
  initialState: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired
}
export default useSelect;
