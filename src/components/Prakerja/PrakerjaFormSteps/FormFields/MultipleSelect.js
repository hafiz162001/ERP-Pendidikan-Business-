import { Field } from "formik";
import React from "react";

const MultipleSelect = ({ label, name, options }) => {
  return (
    <>
      {/* <div id="checkbox-group">{label}</div> */}
      <div role="group" aria-labelledby="checkbox-group">
        {options.map((option) => (
          <div className="form-check" key={option.opt_name}>
            <label className="form-check-label">
              <Field type="checkbox" name={name} value={option.opt_name} />
              {option.opt_name}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default MultipleSelect;
