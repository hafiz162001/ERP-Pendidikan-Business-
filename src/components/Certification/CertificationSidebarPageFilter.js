import React, { useEffect, useState } from "react";
import Checkbox from "../Elements/Checkbox";
import RadioButton from "../Elements/RadioButton";

function CertificationPageFilter({
  filterLevel,
  setFilterLevel,
  filtering,
  setFiltering,
}) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  // for radio button

  const handlePopularFilter = () => {
    setFiltering("desc");
  };

  const handleNewFilter = () => {
    setFiltering("");
  };

  const handleRatingFilter = () => {
    setFiltering("rating");
  };

  const handlePromoFilter = () => {
    setFiltering("promo");
  };

  return (
    <div className="course__sidebar-widget">
      <div className="course__sidebar-info">
        <h4 className="course__sidebar-title">Filter</h4>
        <span>
          <RadioButton
            label="Terbaru"
            value=""
            name="filter"
            checked={filtering === ""}
            onChange={handleNewFilter}
          />
          <RadioButton
            label="Terpopuler"
            value="desc"
            name="filter"
            checked={filtering === "desc"}
            onChange={handlePopularFilter}
          />
          {/* <RadioButton
              label="Rating Tertinggi"
              value="rating"
              name="filter"
              checked={filtering === "rating"}
              onChange={handleRatingFilter}
            />
            <RadioButton
              label="Sedang Promo"
              value="promo"
              name="filter"
              checked={filtering === "promo"}
              onChange={handlePromoFilter}
            /> */}
        </span>
      </div>
    </div>
  );
}

export default CertificationPageFilter;
