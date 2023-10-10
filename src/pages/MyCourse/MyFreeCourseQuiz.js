// TODO move random item function to here, so the user with react dev tool can't see the props. next time.
import useFetchDataWithAuth from "../../hooks/useFetchDataWithAuth";
import { useParams } from "react-router-dom";
import Loading from "../../components/SideComponents/Loading/Loading";
import Wrapper from "../../components/Layout/Wrapper";
import MyFreeCourseQuizSub from "./MyFreeCourseQuizSub";
import { useEffect } from "react";

function MyFreeCourseQuiz() {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data: quiz, loading: loadingQuiz } = useFetchDataWithAuth(
    "course/get_syllabus_quiz?id_customer_syllabus=" + id + "&is_start=1"
  );
  const { data: syllabus, loading: loadingSyllabus } = useFetchDataWithAuth(
    "academy/get_customer_syllabus?id_customer_syllabus=" + id + "&is_list=2"
  );
  if (loadingQuiz || loadingSyllabus) return <Loading />;
  // console.log(quiz.data);

  return (
    <Wrapper>
      <div className="bg-light">
        <div className="container pt-120">
          <MyFreeCourseQuizSub
            id={id}
            quiz={quiz}
            idCustomerCourse={syllabus?.data[0].id_customer_course}
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default MyFreeCourseQuiz;
