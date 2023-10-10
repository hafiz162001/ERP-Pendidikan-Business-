import React, { useEffect, useState } from "react";
import Checkbox from "../Elements/Checkbox";
import RadioButton from "../Elements/RadioButton";

function CourseSidebarPageFilter({
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

  const handleBeginnerLevel = () => {
    setFilterLevel("1");
  };

  const handleIntermediateLevel = () => {
    setFilterLevel("2");
  };

  const handleAdvanncedLevel = () => {
    setFilterLevel("3");
  };

  const handleAllLevel = () => {
    setFilterLevel("");
  };

  return (
    <div className="course__sidebar-widget">
      <div className="course__sidebar-info">
        <h4 className="course__sidebar-title">Filter</h4>
        <RadioButton
          label="Terbaru"
          checked={filtering === ""}
          value=""
          onChange={handleNewFilter}
          name="filter"
        />
        <RadioButton
          label="Terpopuler"
          checked={filtering === "peserta_desc"}
          value="peserta_desc"
          onChange={handlePopularFilter}
          name="filter"
        />
        {/* <RadioButton
              label="Rating Tertinggi"
              value={filtering === "rating"}
              onChange={handleRatingFilter}
              name="filter"
            /> */}
        {/* <RadioButton
              label="Sedang Promo"
              value={filtering === "promo"}
              onChange={handlePromoFilter}
              name="filter"

            /> */}
      </div>
      <div className="course__sidebar-info mt-3">
        <h4 className="course__sidebar-title">Tingkat</h4>

        <RadioButton
          label="Semua Tingkat"
          value=""
          checked={filterLevel === ""}
          onChange={handleAllLevel}
          name="level"
        />
        <RadioButton
          label="Mudah"
          value="1"
          checked={filterLevel === "1"}
          onChange={handleBeginnerLevel}
          name="level"
        />
        <RadioButton
          label="Sedang"
          value="2"
          checked={filterLevel === "2"}
          onChange={handleIntermediateLevel}
          name="level"
        />
        <RadioButton
          label="Sulit"
          value="3"
          checked={filterLevel === "3"}
          onChange={handleAdvanncedLevel}
          name="level"
        />
      </div>
      {/* <div className="course__sidebar-info mt-3">
        <h4 className="course__sidebar-title">Topik</h4>
        <ul>
          <li>
            <Checkbox
              label="Digital Startup"
              value={checked}
              onChange={handleChange}
            />
            <Checkbox
              label="Marketing"
              value={checked}
              onChange={handleChange}
            />
            <Checkbox label="Finance" value={checked} onChange={handleChange} />
            <Checkbox label="Sales" value={checked} onChange={handleChange} />
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default CourseSidebarPageFilter;
