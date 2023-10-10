import React from "react";
import { photoUrl } from "../../../api/baseUrl";

const dummyData = {
  admin_name: "BISA AI Academy Admin",
  course_name: " Belajar Menjadi Jr. Data Scientist (Bauran)",
  date: "Tue, 14 Jun 2022 08:00:00 GMT",
  description: "Diskusi Mingguan Prakerja",
  grade: null,
  id_admin: 1,
  id_course: 419,
  id_discussion: 271,
  id_teacher: 16,
  id_teacher_course: 247,
  id_user: 3,
  is_aktif: 3,
  name: "Diskusi",
  password_attendee: "214893",
  password_moderator: "seuh2d840x1vug",
  photo: "2022-06-11_002556_discuss.png",
  room_id: 58908,
  room_password: null,
  teacher_name: "M. Octaviano Pratama, M.Kom",
  teacher_photo: null,
  url: null,
};

const MyCourseDiscussionCard = ({ dummyData }) => {
  return (
    <>
      <div className="card rounded-3 h-100 border-0 shadow-sm pb-2">
        <div className="row">
          {/* <div className="col-3">
            <img
              className="img-fluid rounded-top"
              src={photoUrl.discussionPhoto + dummyData.photo}
              alt="img not found"
            />
          </div> */}
          <div className="col-9">
            <div className="ms-3 me-3 mb-2">
              <h5 className="fw-bold mt-3">{dummyData.name}</h5>
              <div>{dummyData.description}</div>
              <div>Teacher : {dummyData.teacher_name}</div>
              <span className="">Tanggal : {dummyData.date}</span>
              <div className="row">
                <div>
                  Id Room : {dummyData.room_id ? dummyData.room_id : "-"}
                </div>
                <div>
                  Password :{" "}
                  {dummyData.room_password ? dummyData.room_password : "-"}
                </div>
                {dummyData.url ? (
                  <div className="col-auto">
                    <a href={dummyData.url} className="btn btn-altdanger">
                      Ke Halaman Tampil
                    </a>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCourseDiscussionCard;
