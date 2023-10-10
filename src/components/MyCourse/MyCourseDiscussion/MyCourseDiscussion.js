import React from "react";
import { useFetchMyCourseDiscussion } from "../../../api/mycourse";
import MyCourseDiscussionCard from "./MyCourseDiscussionCard";
import Loading from "../../../components/SideComponents/Loading/Loading";
import useFetchDataWithAuth from "../../../hooks/useFetchDataWithAuth";

const dummyData = [
  {
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
  },
];

const MyCourseDiscussion = ({ id }) => {
  // const { isLoading, isError, data, error, refetch } =
  //   useFetchMyCourseDiscussion({ id });

  // if (isLoading) {
  //   return <Loading />;
  // }
  // if (isError) {
  //   return <h1>{error}</h1>;
  // }

  const { data, loading: loadingDiscussion } = useFetchDataWithAuth(
    `course/get_discuss?id_course=${id}&is_aktif=1`
  );
  if (loadingDiscussion) return <Loading />;

  const dummyData = data.data;

  return (
    <>
      {dummyData.map((data) => (
        <MyCourseDiscussionCard key={data.id_discussion} dummyData={data} />
      ))}
    </>
  );
};

export default MyCourseDiscussion;
