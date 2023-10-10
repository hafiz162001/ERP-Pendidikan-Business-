const Checkbox = ({ label, value, onChange }) => {
  return (
    <div className="course__sidebar-check mb-10 d-flex align-items-center">
      <input
        className="m-check-input"
        type="checkbox"
        checked={value}
        onChange={onChange}
        id={"id_" + label}
      />
      <label className="m-check-label" htmlFor={"id_" + label}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
