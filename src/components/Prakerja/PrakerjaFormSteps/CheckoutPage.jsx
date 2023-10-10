import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { Formik, Form } from "formik";

import AddressForm from "./Forms/AddressForm";
import PaymentForm from "./Forms/PaymentForm";
import ReviewOrder from "./ReviewOrder";
import CheckoutSuccess from "./CheckoutSuccess";

import validationSchema from "./FormModel/validationSchema";
import checkoutFormModel from "./FormModel/checkoutFormModel";
import formInitialValues from "./FormModel/formInitialValues";

import useStyles from "./styles";
import DocumentUpload from "./Forms/DocumentUpload";
import PrakerjaFormTC from "../PrakerjaFormTC";
import Checkbox from "../../Elements/Checkbox";
import useFetchData from "../../../hooks/useFetchData";
import base64RemoveMime from "../../../utils/base64RemoveMime";
import { baseUrl } from "../../../api/baseUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const questionData = {
  data: [
    {
      id_question: 1,
      info: null,
      is_option_exist: 0,
      placeholder: null,
      question: "Email Narahubung",
      type: "TEXT",
    },
    {
      id_question: 2,
      info: "Pilih salah satu jenis lembaga berikut",
      is_option_exist: 1,
      options: [
        {
          opt_name: "Perguruan Tinggi",
        },
        {
          opt_name: "Lembaga Pelatihan Kerja",
        },
        {
          opt_name: "Balai Latihan Kerja",
        },
        {
          opt_name: "Lembaga Kursus Pelatihan",
        },
        {
          opt_name: "Lembaga Berbadan Hukum Lainnya",
        },
      ],
      placeholder: null,
      question: "Jenis Lembaga",
      type: "TEXT",
    },
    {
      id_question: 3,
      info: null,
      is_option_exist: 0,
      placeholder: null,
      question: "Nama Merek/ Brand Lembaga",
      type: "TEXT",
    },
    {
      id_question: 4,
      info: null,
      is_option_exist: 0,
      placeholder: null,
      question: "Nama Badan Hukum Lembaga",
      type: "TEXT",
    },
    {
      id_question: 5,
      info: null,
      is_option_exist: 0,
      placeholder: null,
      question: "Nama Narahubung Kemitraan",
      type: "TEXT",
    },
    {
      id_question: 6,
      info: null,
      is_option_exist: 0,
      placeholder: null,
      question: "Nomor Telp/ Selular Narahubung Kemitraan",
      type: "TEXT",
    },
    {
      id_question: 7,
      info: null,
      is_option_exist: 1,
      options: [
        {
          opt_name: "Master Class",
        },
        {
          opt_name: "Master Class Kartu Prakerja",
        },
      ],
      placeholder: null,
      question: "Apa kategori kelas yang tertarik untuk Anda isi di Bakerspice?",
      type: "MULTI",
    },
    {
      id_question: 8,
      info: "Profil lembaga setidaknya berisikan hal berikut ini:\r\n1. Riwayat Lembaga\r\n2. SDM Penggerak Utama Lembaga/Struktur Organisasi\r\n3. Daftar Jenis Pelatihan dan Instruktur (Wajib untuk Kartu Prakerja)\r\n4. Sarana Prasana Pelatihan (Daring/Luring) (Wajib untuk Kartu Prakerja)\r\n5. Detail Kontak Lembaga",
      is_option_exist: 0,
      placeholder: null,
      question: "Profil Lembaga",
      type: "FILE",
    },
    {
      id_question: 9,
      info: "Unggah salah satu dokumen perizinan berikut (diprioritaskan dari urutan yang teratas)\r\n1. Nomor Induk Berusaha (NIB)\r\n2. Surat Izin Usaha Perdagangan (SIUP)\r\n3. Izin Operasional/Penyelenggaraan Satuan\r\n4. Surat Keputusan/Penetapan/Izin Pendirian atau Pengesahan\r\n5. Dokumen perizinan lainnya",
      is_option_exist: 0,
      placeholder: null,
      question: "Unggah Dokumen Perizinan",
      type: "FILE",
    },
    {
      id_question: 10,
      info: null,
      is_option_exist: 0,
      placeholder: null,
      question: "Catatan yang perlu diketahui Tim Kemitraan Bakerspice",
      type: "TEXT",
    },
  ],
  status_code: 200,
};

export default function CheckoutPage() {
  const navigate = useNavigate();
  // khusus untuk persetujuan
  const [checkedData, setCheckedData] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();
  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");

  const file1Handler = (value) => {
    // console.log(value);
    setFile1(value);
  };

  const file2Handler = (value) => {
    setFile2(value);
  };

  const steps = [
    // "Persetujuan",
    "Identitas lembaga",
    "Kategori kelas",
    "Unggah dokumen",
    // "Submit",
  ];

  const { formId, formField } = checkoutFormModel;
  const currentValidationSchema = validationSchema[activeStep];

  // const { data: questionData, loading: loadingQuestionData } = useFetchData(
  //   "client_form/get_questions"
  // );
  // if (loadingQuestionData) return <h1>Loading...</h1>;
  // console.log(questionData);

  function _renderStepContent(step) {
    switch (step) {
      case 0:
        return (
          <AddressForm formField={formField} questionData={questionData.data} />
        );
      case 3:
        return <ReviewOrder />;
      case 2:
        return (
          <DocumentUpload
            questionData={questionData.data}
            file1={file1}
            file2={file2}
            file1Handler={file1Handler}
            file2Handler={file2Handler}
          />
        );
      case 1:
        return (
          <PaymentForm formField={formField} questionData={questionData.data} />
        );
      case 5:
        return <PrakerjaFormTC />;
      default:
        return <div>Not Found</div>;
    }
  }

  const handleChange = () => {
    setCheckedData(!checkedData);
  };

  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, { setSubmitting }) {
    await _sleep(1000);
    const payload = {
      1: values.email,
      2: values.city,
      3: values.merk,
      4: values.badanhukum,
      5: values.narahubung,
      6: values.phoneNumber,
      7: values.program,
      8: base64RemoveMime(file1),
      9: base64RemoveMime(file2),
      10: values.catatan,
    };
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.post(
        baseUrl.baseUrl + "/client_form/insert_form_answer",
        payload,
        {
          headers: headers,
        }
      );

      if (response.data.status_code === 200) {
        alert("Berhasil di submit");
      }
    } catch (e) {
      alert("Gagal mengisi form");
      window.location.reload(false);
      // console.log(e);
    } finally {
      setSubmitting(false);
    }
    // alert(JSON.stringify(payload, null, 2));
    // setSubmitting(false);
    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <>
      {!checkedData ? (
        <div>
          <PrakerjaFormTC />
          <div className="container mt-10">
            <Checkbox
              label="Setuju"
              value={checkedData}
              onChange={handleChange}
            />
          </div>
        </div>
      ) : (
        <React.Fragment>
          <h1>Pendaftaran</h1>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <CheckoutSuccess />
            ) : (
              <Formik
                initialValues={formInitialValues}
                validationSchema={currentValidationSchema}
                onSubmit={_handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form id={formId}>
                    {_renderStepContent(activeStep)}

                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button
                          onClick={_handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>
                      )}
                      <div className={classes.wrapper}>
                        <Button
                          disabled={isSubmitting}
                          type="submit"
                          variant="contained"
                          color="primary"
                          className={classes.button}
                        >
                          {isLastStep ? "Kirim" : "Next"}
                        </Button>
                        {isSubmitting && (
                          <CircularProgress
                            size={24}
                            className={classes.buttonProgress}
                          />
                        )}
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </React.Fragment>
        </React.Fragment>
      )}
    </>
  );
}
