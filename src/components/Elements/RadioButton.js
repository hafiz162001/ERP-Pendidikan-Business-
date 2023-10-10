import React from "react";

const RadioButton = ({ label, value, checked, onChange, name }) => {
  return (
    <div className="form-check mb-5 d-flex align-items-center">
      <input
        className="form-check-input"
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        name={name}
        id={"id_" + label}
      />
      <label className="form-check-label" htmlFor={"id_" + label}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
