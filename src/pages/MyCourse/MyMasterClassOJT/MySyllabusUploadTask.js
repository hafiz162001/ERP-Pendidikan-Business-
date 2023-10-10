import React, { useState, useRef } from "react";
import { TextField } from "../../../components/Elements/TextField";
import Wrapper from "../../../components/Layout/Wrapper";
import base64Converter from "../../../utils/base64Converter";
import { useNavigate, useParams } from "react-router-dom";
import useFetchDataWithAuth from "../../../hooks/useFetchDataWithAuth";
import Loading from "../../../components/SideComponents/Loading/Loading";
import axios from "axios";
import { baseUrl } from "../../../api/baseUrl";
import { useToken } from "../../../auth/useToken";
import base64RemoveMime from "../../../utils/base64RemoveMime";
import refreshPage from "../../../utils/refreshPage";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";

const dummyData = {
  taskUploaded: "no",
  task: "Buatlah Ringkasan 1 paragraf yang anda ketahui mengenai Data Science. Instruksi Pengumpulan tugas: 1. Format File berbentuk PDF 2. Maskimal ukuran file yaitu 2MB",
  end_time_task: "Fri, 17 Jun 2022 19:11:18 GMT",
  id_customer_course: 2775,
  id_customer_syllabus: 15812,
  id_syllabus: 185,
  id_user: 150,
  name: "Pengenalan Design",
  passing_grade: 70,
  score: 100,
  score_task: 0,
  start_time: "Fri, 17 Jun 2022 16:18:29 GMT",
  start_time_task: "Fri, 17 Jun 2022 19:11:18 GMT",
  status: 2,
  submit_time: "Fri, 17 Jun 2022 16:19:17 GMT",
  submit_time_task: "Fri, 17 Jun 2022 19:11:17 GMT",
  task_description: "Testing aja",
  task_file: "2022-06-17_191117_task_syllabus.pdf",
  task_time: 0,
  theory:
    '<p><span style="color:black;"><strong>Apa Itu Desain ?</strong></span><br><span style="color:black;">Desain adalah suatu perancanaan atau perancangan yang dilakukan sebelum pembuatan sebuah objek, sistem, komponen, ataupun suatu struktur.</span></p><p><span style="color:black;">Fungsi dari desain adalah sebagai alat bantu dalam proses menciptakan objek baru. Kemudian sebagai wadah untuk menunjukkan tampilan objek tertentu kepada masyarakat dengan gambaran atau keadaan sesungguhnya.</span></p><p><strong>Unsur Unsur Pada Desain</strong><br>1. Titik<br><span style="color:black;">Elemen titik adalah suatu bentuk kecil yang tidak mempunyai dimensi. Dari sebuah titik dapat dikembangkan menjadi garis atau bidang. Pada gambar dalam bidang gambar akan berawal dari sebuah titik dan berhenti pada sebuah titik.</span><br><br><span style="color:black;">2. </span>Garis<br><span style="color:black;">Garis adalah suatu hasil goresan nyata dan batas limit suatu benda, ruang, rangkaian masa, dan warna. Garis bisa panjang, pendek, tebal, tipis, lurus, melengkung, berombak, vertikal, horizontal, diagonal, dan lain sebagainya. Jika titik-titik diletakkan sejajar secara berimpit, maka akan didapatkan sebuah garis.</span><br><br><span style="color:black;">3. </span>Bidang<br><span style="color:black;">Bidang merupakan bentuk yang menempati ruang, dan bentuk bidang sebagai ruangnya sendiri disebut ruang dwimatra/dua dimensi. Bidang hanya berdimensi panjang dan lebar. Bidang sebagai ruang adalah ruang dwimatra dan merupakan tempat di mana objek-objek berada.</span></p><p>4. Ruang<br><span style="color:black;">Bentuk rupa Ruang/volume merupakan bentuk yang mempunyai tiga dimensi yaitu dimensi ruang yang tediri dari panjang, lebar, tebal.</span></p><p>5. Warna<br><span style="color:black;">Warna merupakan spektrum tertentu yang terdapat di dalam suatu cahaya sempurna (berwarna putih). Identitas suatu warna ditentukan panjang gelombang cahaya tersebut. Warna dapat didefinisikan secara objektif/fisik sebagai sifat cahaya yang dipancarkan, atau secara subjektif/psikologis sebagai bagian dari pengalaman indra penglihatan.</span></p><p>6. Ornamen<br><span style="color:black;">Dalam desain ornamen merupakan unsur tambahan yang fungsinya sebagai penghias. Ornamen menjadi unsur yang tak terpisahkan pada desain-desain tradisional di Indonesia.</span></p><p>7. Tekstur<br><span style="color:black;">Tekstur juga menjadi unsur desain yang tidak dapat diabaikan karena tekstur akan memberi kesan pada benda.</span></p>',
  user_email: "anantaw81@gmail.com",
  user_name: "I Putu Ananta Wijaya",
  user_phone: null,
  video: "",
};

const MySyllabusUploadTask = () => {
  const navigate = useNavigate("");
  const { id } = useParams("");
  const [token] = useToken("");

  const formUpload = useRef();
  const [desc, setDesc] = useState("");
  const [filename, setFilename] = useState("");
  const [myTaskFile, setMyTaskFile] = useState("");
  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;

  const { data: dataSyllabusTask, loading: loadingSyllabusTask } =
    useFetchDataWithAuth(
      "academy/get_customer_syllabus?id_customer_syllabus=" + id
    );
  if (loadingSyllabusTask) return <Loading />;

  const dummyData = dataSyllabusTask.data[0];

  const handleFileUploads = async (e) => {
    const file = e.target.files[0];
    if (!file && !file.name) {
      window.alert("Please select a file");
      return false;
    }
    if (file.size > 2e6) {
      window.alert("Please upload a file smaller than 2 MB");
      formUpload.current.reset();
      return false;
    }
    if (!["application/pdf"].includes(file.type)) {
      window.alert("Your file type is not pdf");
      formUpload.current.reset();
      return false;
    }
    const base64 = await base64Converter(file);
    setMyTaskFile(base64);
  };

  const descHandleChange = (e) => {
    setDesc(e.target.value);
  };

  const filenameHandleChange = (e) => {
    setFilename(e.target.value);
  };

  const submitTaskFinal = async () => {
    // e.preventDefault();
    const url = baseUrl.baseUrl + "/academy/update_customer_syllabus";
    const payload = {
      id_customer_syllabus: id,
      task_description: desc,
      task_file: base64RemoveMime(myTaskFile),
      file_name: filename + ".pdf",
    };
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      },
    };

    try {
      const response = await axios.put(url, payload, header);
      if (response.data.status_code === 200) {
        toast.success("Berhasil upload tugas");
        refreshPage();
      }
    } catch (e) {
      toast.error("Gagal: " + JSON.stringify(e.response.data.description));
    } finally {
      // setSubmitting(false);
    }
  };

  const uploadTask = (
    <form onSubmit={handleSubmit(submitTaskFinal)} ref={formUpload}>
      <div className="mb-3">
        <label for="desc" className="form-label">
          Deskripsi
        </label>
        <textarea
          type="text"
          rows="2"
          className="form-control"
          id="desc"
          name="desc"
          value={desc}
          onChange={descHandleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">File Tugas</label>
        <input
          type="file"
          className="form-control"
          name="myImage"
          accept=".pdf"
          onChange={(e) => handleFileUploads(e)}
        />
      </div>
      <div className="mb-3">
        <label for="filename" className="form-label">
          Nama File
        </label>
        <input
          type="text"
          className="form-control"
          id="filename"
          name="filename"
          value={filename}
          onChange={filenameHandleChange}
        />
      </div>
      <div className="d-grid gap-2">
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
          Submit Tugas
        </button>
      </div>
    </form>
  );

  const doneUploadTask = (
    <p>
      Jawaban sudah disubmit.
      <div>Nama file: {dummyData.task_file}</div>
      <div>Waktu pengiriman: {dummyData.submit_time_task}</div>
      <div>Skor: {dummyData.score_task}</div>
    </p>
  );

  return (
    <Wrapper>
      <div className="bg-light">
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
        <div
          className="heading-mycoursepage bg-cream-bb pt-120"
          style={{ zIndex: 1, position: "relative" }}
        >
          <div className="container">
            <h3 className="fw-bold">Tugas {dummyData.name} </h3>
          </div>
        </div>
        <div
          className="container"
          style={{ position: "relative", top: "-140px", zIndex: 2 }}
        >
          <div className="card border-0 shadow-sm rounded-3 pt-20 pl-20 pr-20 pb-20">
            <div>
              <h5 className="fw-bold">Teori</h5>
              <p
                dangerouslySetInnerHTML={{
                  __html: dummyData.theory,
                }}
              ></p>
              <h5>Intruksi Khusus</h5>
              <p
                dangerouslySetInnerHTML={{
                  __html: dummyData.task,
                }}
              />
              <p className="fw-bold">
                Batas Pengerjaan: {dummyData.end_time_task}
              </p>
              {dummyData.task_file === null ? uploadTask : doneUploadTask}
              <div className="d-grid gap-2">
                <button
                  onClick={() => navigate(-1)}
                  className="btn btn-altdanger"
                >
                  Kembali
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MySyllabusUploadTask;
