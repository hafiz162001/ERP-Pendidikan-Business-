// TODO move random item function to here, so the user with react dev tool can't see the props. next time.
// Belum diubah fiturnya belum tau udah jadi atau belum

import React, { useEffect, useState } from "react";
import RadioGroupQuiz from "../../components/Elements/RadioGroupQuiz";
import useFetchDataWithAuth from "../../hooks/useFetchDataWithAuth";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useToken } from "../../auth/useToken";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../api/baseUrl";

const quiz = {
  data: [
    {
      answer1:
        "Untuk menganalisa strategi perpajakan pemerintah untuk Wajib Pajak",
      answer2: "Analisa Kinerja",
      answer3: "Perencanaan Perpajakan",
      answer4: "Analisa kinerja, bonus",
      answer5: "Penentuan Deviden",
      course_name: "Manajemen Keuangan",
      id_course: 19,
      id_quiz: 16,
      id_syllabus: 8,
      id_syllabus_quiz: 16,
      is_aktif: 1,
      quiz: "Yang bukan kegunaan Laporan Keuangan Perusahaan untuk pihak internal?",
      syllabus_name: "Pengantar Manajemen Keuangan",
    },
    {
      answer1: "Budgeting",
      answer2: "Costing",
      answer3: "Inventarisir",
      answer4: "Journal",
      answer5: "Lodging",
      course_name: "Manajemen Keuangan",
      id_course: 19,
      id_quiz: 15,
      id_syllabus: 8,
      id_syllabus_quiz: 15,
      is_aktif: 1,
      quiz: "Bagaimana caranya mengatur pengeluaran?",
      syllabus_name: "Pengantar Manajemen Keuangan",
    },
    {
      answer1: "LIFO, FIFO, weighting average cost",
      answer2: "JIT, Kanban, SCM",
      answer3: "LIFO, FIFO. Kanban",
      answer4: "LIFO, FIFO, Sensitivity Analysis",
      answer5: "LIFO, FIFO, JIT",
      course_name: "Manajemen Keuangan",
      id_course: 19,
      id_quiz: 14,
      id_syllabus: 8,
      id_syllabus_quiz: 14,
      is_aktif: 1,
      quiz: "Penilaian Persedian terdiri dari metode?",
      syllabus_name: "Pengantar Manajemen Keuangan",
    },
    {
      answer1: "Bank Garansi",
      answer2: "L/C",
      answer3: "Inkaso",
      answer4: "Giro",
      answer5: "Bank Referensi",
      course_name: "Manajemen Keuangan",
      id_course: 19,
      id_quiz: 13,
      id_syllabus: 8,
      id_syllabus_quiz: 13,
      is_aktif: 1,
      quiz: "Penjaminan pembelian barang bisa antara pembeli dan penjual dalam proyek, dapat dilakukan dengan?",
      syllabus_name: "Pengantar Manajemen Keuangan",
    },
    {
      answer1: "L/C",
      answer2: "Bank Garansi",
      answer3: "Inkaso",
      answer4: "Giro",
      answer5: "Bank Referensi",
      course_name: "Manajemen Keuangan",
      id_course: 19,
      id_quiz: 12,
      id_syllabus: 8,
      id_syllabus_quiz: 12,
      is_aktif: 1,
      quiz: "Pendanaan ekspor impor bank melalui penerbitan?",
      syllabus_name: "Pengantar Manajemen Keuangan",
    },
    {
      answer1: "Factoring",
      answer2: "Asuransi",
      answer3: "Leasing",
      answer4: "Pembayaran",
      answer5: "Koperasi",
      course_name: "Manajemen Keuangan",
      id_course: 19,
      id_quiz: 11,
      id_syllabus: 8,
      id_syllabus_quiz: 11,
      is_aktif: 1,
      quiz: "Perusahaan yang membeli invoice dan mengambil alih penagihan adalah perusahaan?",
      syllabus_name: "Pengantar Manajemen Keuangan",
    },
    {
      answer1: "Call Paper, Inter Bank Call Money, SBPU",
      answer2: "Warrant",
      answer3: "Saham Biasa",
      answer4: "Saham Preferen",
      answer5: "Obligasi",
      course_name: "Manajemen Keuangan",
      id_course: 19,
      id_quiz: 10,
      id_syllabus: 8,
      id_syllabus_quiz: 10,
      is_aktif: 1,
      quiz: "Instrumen Pasar Uang adalah?",
      syllabus_name: "Pengantar Manajemen Keuangan",
    },
    {
      answer1: "SIPF",
      answer2: "Pefindo",
      answer3: "KSEI",
      answer4: "KPEI",
      answer5: "IBPA",
      course_name: "Manajemen Keuangan",
      id_course: 19,
      id_quiz: 9,
      id_syllabus: 8,
      id_syllabus_quiz: 9,
      is_aktif: 1,
      quiz: "Institusi Perlindungan Pemodal adalah?",
      syllabus_name: "Pengantar Manajemen Keuangan",
    },
    {
      answer1: "Bappepti",
      answer2: "BEI",
      answer3: "BI",
      answer4: "Kemendag",
      answer5: "OJK",
      course_name: "Manajemen Keuangan",
      id_course: 19,
      id_quiz: 8,
      id_syllabus: 8,
      id_syllabus_quiz: 8,
      is_aktif: 1,
      quiz: "Pengatur Pasar Komoditas secara langsung adalah?",
      syllabus_name: "Pengantar Manajemen Keuangan",
    },
    {
      answer1: "Pasar Komoditas",
      answer2: "Pasar Obligasi",
      answer3: "Pasar Uang",
      answer4: "Pasar Saham",
      answer5: "Pasar Modal",
      course_name: "Manajemen Keuangan",
      id_course: 19,
      id_quiz: 7,
      id_syllabus: 8,
      id_syllabus_quiz: 7,
      is_aktif: 1,
      quiz: "Uang Kripto di Indonesia diperjualbelikan di?",
      syllabus_name: "Pengantar Manajemen Keuangan",
    },
  ],
};

function MyCertificationQuiz() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [token] = useToken();
  const [answers, setAnswers] = useState(Array(5).fill(""));
  // useEffect(() => {
  //   setAnswers()
  // }, []);
  // const { data: quiz, loading: loadingQuiz } = useFetchDataWithAuth(
  //   "course/get_syllabus_quiz?id_customer_syllabus=" + id + "&is_start=1"
  // );
  // if (loadingQuiz) return <h1>Loading...</h1>;
  // console.log(quiz.data);

  // get array quiz length
  const lengthQuiz = quiz.data.length;
  // console.log(lengthQuiz);

  const submitHandler = (e) => {
    e.preventDefault();
    let dataAnswers = {
      id_customer_syllabus: id,
      answers: [],
    };
    answers.map((answer, index) => {
      if (answer === quiz.data[index].answer1) {
        let dataQuizAnswer = {
          id_quiz: quiz.data[index].id_quiz,
          answer_key: "answer1",
        };
        dataAnswers.answers.push(dataQuizAnswer);
      } else if (answer === quiz.data[index].answer2) {
        let dataQuizAnswer = {
          id_quiz: quiz.data[index].id_quiz,
          answer_key: "answer2",
        };
        dataAnswers.answers.push(dataQuizAnswer);
      } else if (answer === quiz.data[index].answer3) {
        let dataQuizAnswer = {
          id_quiz: quiz.data[index].id_quiz,
          answer_key: "answer3",
        };
        dataAnswers.answers.push(dataQuizAnswer);
      } else if (answer === quiz.data[index].answer4) {
        let dataQuizAnswer = {
          id_quiz: quiz.data[index].id_quiz,
          answer_key: "answer4",
        };
        dataAnswers.answers.push(dataQuizAnswer);
      } else if (answer === quiz.data[index].answer5) {
        let dataQuizAnswer = {
          id_quiz: quiz.data[index].id_quiz,
          answer_key: "answer5",
        };
        dataAnswers.answers.push(dataQuizAnswer);
      }
    });
    // console.log(dataAnswers);

    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    };
    axios
      .post(
        baseUrl.baseUrl + "/academy/insert_customer_syllabus_quiz",
        dataAnswers,
        { headers }
      )
      .then((response) => {
        // console.log("Status: ", response.status);
        // console.log("Data: ", response.data);
        // alert
        if (response.data.status === 2) {
          alert("Anda lulus dengan nilai " + response.data.score);
          navigate(`/myfreecoursedetails/${quiz.data[0].id_course}`);
        } else {
          alert("Anda belum lulus dengan nilai " + response.data.score);
          navigate(`/myfreecoursedetails/${quiz.data[0].id_course}`);
        }
      })
      .catch((error) => {
        console.error("Something went wrong!", error);
      });
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
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
            <div key={quiz.id_quiz} className="mt-20 mb-20">
              <RadioGroupQuiz
                quiz={quizDetail}
                numbering={index}
                setAnswerHandler={setAnswers}
              />
            </div>
          );
        })}
        <input type="submit" />
      </form>
    </div>
  );
}

export default MyCertificationQuiz;
