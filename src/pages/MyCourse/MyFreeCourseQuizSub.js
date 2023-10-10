import React, { useEffect, useState } from "react";
import axios from "axios";
import { useToken } from "../../auth/useToken";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../api/baseUrl";
import RadioGroupQuiz from "../../components/Elements/RadioGroupQuiz";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";

const MyFreeCourseQuizSub = ({ quiz, id, idCustomerCourse }) => {
  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;
  const lengthQuiz = quiz?.data.length;
  // console.log(lengthQuiz);
  const navigate = useNavigate();
  const [token] = useToken();
  const [answers, setAnswers] = useState(Array(lengthQuiz).fill(""));
  // useEffect(() => {
  //   setAnswers()
  // }, []);

  // get array quiz length

  const submitHandler = async (e) => {
    // e.preventDefault();
    let dataAnswers = {
      id_customer_syllabus: id,
      answers: [],
    };
    // console.log(quiz);
    // console.log(answers);
    answers.map((answer, index) => {
      let dataQuizAnswer = {
        id_quiz: "",
        answer_key: "",
      };
      if (answer === quiz.data[index].answer1) {
        dataQuizAnswer = {
          id_quiz: quiz.data[index].id_quiz,
          answer_key: "answer1",
        };
      } else if (answer === quiz.data[index].answer2) {
        dataQuizAnswer = {
          id_quiz: quiz.data[index].id_quiz,
          answer_key: "answer2",
        };
      } else if (answer === quiz.data[index].answer3) {
        dataQuizAnswer = {
          id_quiz: quiz.data[index].id_quiz,
          answer_key: "answer3",
        };
      } else if (answer === quiz.data[index].answer4) {
        dataQuizAnswer = {
          id_quiz: quiz.data[index].id_quiz,
          answer_key: "answer4",
        };
      } else if (answer === quiz.data[index].answer5) {
        dataQuizAnswer = {
          id_quiz: quiz.data[index].id_quiz,
          answer_key: "answer5",
        };
      }
      return dataAnswers.answers.push(dataQuizAnswer);
    });

    // console.log(dataAnswers);
    const url = baseUrl.baseUrl + "/academy/insert_customer_syllabus_quiz";
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      },
    };
    try {
      const response = await axios.post(url, dataAnswers, header);
      // console.log("Status: ", response.status);
      // console.log("Data: ", response.data);
      // alert
      if (response.data.status === 2) {
        alert("Anda lulus dengan nilai " + response.data.score);
        navigate(`/myfreecoursedetails/${idCustomerCourse}`, {
          replace: true,
        });
      } else {
        alert("Anda belum lulus dengan nilai " + response.data.score);
        navigate(`/myfreecoursedetails/${idCustomerCourse}`, {
          replace: true,
        });
      }
    } catch (e) {
      toast.error("Gagal: " + JSON.stringify(e.response.data.description));
    } finally {
      // setSubmitting(false);
    }
  };
  return (
    <>
      <Toaster
        containerStyle={{
          top: 80,
          left: 20,
          bottom: 20,
          right: 20,
        }}
        position="top-center"
        reverseOrder={false}
      />
      <form onSubmit={handleSubmit(submitHandler)}>
        <h3>Quiz</h3>
        {quiz.data.map((quiz, index) => {
          let quizDetail = {
            question: quiz.quiz,
            answer: [
              quiz.answer1,
              quiz.answer2,
              quiz.answer3,
              quiz.answer4,
              quiz.answer5,
            ],
          };
          return (
            <div key={quiz.id_syllabus_quiz} className="mt-20 mb-20">
              <RadioGroupQuiz
                quiz={quizDetail}
                numbering={index}
                setAnswerHandler={setAnswers}
              />
            </div>
          );
        })}
        <button
          className="btn btn-altdanger"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting && (
            <span
              className="spinner-border spinner-border-sm me-1"
              role="status"
              aria-hidden="true"
            ></span>
          )}
          Kirim
        </button>
      </form>
    </>
  );
};

export default MyFreeCourseQuizSub;
