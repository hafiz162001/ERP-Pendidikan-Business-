import React, { useState } from "react";
import Checkbox from "../Elements/Checkbox";
import Searchbox from "../Elements/Searchbox";
import RadioButton from "../Elements/RadioButton";

function MyCoursePageFilter({
  statusCourse,
  statusCourseHandler,
  // free,
  // setFree,
  // master,
  // setMaster,
  // ojt,
  // setOJT,
  // nationalCertification,
  // setNationalCertification,
  // internationalCertification,
  // setInternationalCertification,
  // learningPath,
  // setLearningPath,
  courseType,
  courseTypeHandler,
}) {
  // const [checked, setChecked] = useState(true);
  // const [checkedIn, setCheckedIn] = useState(false);

  // for categories

  // const handleChange = () => {
  //   setChecked(!checked);
  // };

  // const handleFreeCourse = () => {
  //   setFree(!free);
  // };

  // const handleMasterClass = () => {
  //   setMaster(!master);
  // };

  // const handleOJT = () => {
  //   setOJT(!ojt);
  // };

  // // for progress type

  // const handleAllProgress = () => {
  //   statusCourseHandler("");
  // };

  // const handleDoneChange = () => {
  //   statusCourseHandler("2");
  // };

  // const handleProgressChange = () => {
  //   statusCourseHandler("1");
  // };

  // const handleCourseStatus = (e) => {
  //   statusCourseHandler(e.target.value);
  //   console.log(e.target.value);
  // };

  // const handleNationalCertification = () => {
  //   setNationalCertification(!nationalCertification);
  // };

  // const handleInternationalCertification = () => {
  //   setInternationalCertification(!internationalCertification);
  // };

  // const handleLearningPath = () => {
  //   setLearningPath(!learningPath);
  // };

  return (
    <div className="">
      <div className="container pt-10 pb-10">
        {/* <div className="course__sidebar-info mb-20">
          <h5 className="course__sidebar-title">Filter</h5>
          <ul>
            <li>
              <RadioButton
                onChange={statusCourseHandler}
                label="Semua"
                value=""
                checked={statusCourse === ""}
                name="status"
                defaultChecked={true}
              />
              <RadioButton
                onChange={statusCourseHandler}
                label="Telah Selesai"
                value="2"
                checked={statusCourse === "2"}
                name="status"
              />
              <RadioButton
                onChange={statusCourseHandler}
                label="Sedang Belajar"
                value="1"
                checked={statusCourse === "1"}
                name="status"
              />
            </li>
          </ul>
        </div> */}

        <div className="course__sidebar-info">
          <h3 className="course__sidebar-title mt-10">Course</h3>

          {/* <Checkbox
                label="Free Course"
                value={free}
                onChange={handleFreeCourse}
              />
              <Checkbox
                label="Master Class"
                value={master}
                onChange={handleMasterClass}
              />
              <Checkbox
                label="Master Class + OJT"
                value={ojt}
                onChange={handleOJT}
              /> */}
          <RadioButton
            onChange={courseTypeHandler}
            label="Semua Course"
            value="1"
            checked={courseType === "1"}
            name="course"
          />
          <RadioButton
            onChange={courseTypeHandler}
            label="Free Course"
            value="2"
            checked={courseType === "2"}
            name="course"
          />
          <RadioButton
            onChange={courseTypeHandler}
            label="Master Class"
            value="3"
            checked={courseType === "3"}
            name="course"
          />
          <RadioButton
            onChange={courseTypeHandler}
            label="Master Class OJT"
            value="4"
            checked={courseType === "4"}
            name="course"
          />

          <h3 className="course__sidebar-title mt-10">Sertifikasi</h3>

          {/* <Checkbox
                label="Sertifikasi Internasional"
                value={}
                checked={nationalCertification}
                onChange={handleNationalCertification}
              />
              <Checkbox
                label="Sertifikasi Nasional"
                value={}
                checked={internationalCertification}
                onChange={handleInternationalCertification} />*/}

          <RadioButton
            onChange={courseTypeHandler}
            label="Semua Sertifikasi"
            value="5"
            checked={courseType === "5"}
            name="course"
          />
          <RadioButton
            onChange={courseTypeHandler}
            label="International Certification"
            value="6"
            checked={courseType === "6"}
            name="course"
          />
          <RadioButton
            onChange={courseTypeHandler}
            label="National Certification"
            value="7"
            checked={courseType === "7"}
            name="course"
          />

          <h3 className="course__sidebar-title mt-10">Learning Path</h3>

          {/* <Checkbox
                label="Learning Path"
                value={}
                checked={learningPath}
                onChange={handleLearningPath}
              /> */}
          <RadioButton
            onChange={courseTypeHandler}
            label="Learning Path"
            value="8"
            checked={courseType === "8"}
            name="course"
          />
        </div>
      </div>
    </div>
  );
}

export default MyCoursePageFilter;
