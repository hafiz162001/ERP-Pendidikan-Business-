import axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../../../api/baseUrl";
import { useToken } from "../../../auth/useToken";
import refreshPage from "../../../utils/refreshPage";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const AddTestimonial = ({ id }) => {
  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;
  const [token] = useToken("");
  const [rating, setRating] = useState(5);
  const [testimonial, setTestimonial] = useState("");

  const options = [
    {
      type: 5,
      name: "Bintang 5",
    },
    {
      type: 4,
      name: "Bintang 4",
    },
    {
      type: 3,
      name: "Bintang 3",
    },
    {
      type: 2,
      name: "Bintang 2",
    },
    {
      type: 1,
      name: "Bintang 1",
    },
  ];
  const label = "Rating";

  const ratingHandler = (e) => {
    setRating(e.target.value);
  };

  const testimonialHandler = (e) => {
    setTestimonial(e.target.value);
  };

  const submitHandler = async (e) => {
    const payload = {
      id_customer_course: id,
      rating: rating,
      testimonial: testimonial,
    };

    // console.log(payload);
    try {
      const url = baseUrl.baseUrl + "/academy/insert_testimoni_and_rating";
      const header = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${token}`,
        },
      };
      const response = await axios.post(url, payload, header);

      alert(JSON.stringify(response.data.description));
      if (response.data.status_code === 200) {
        toast.success("Menambahkan testimonial berhasil");
        setTimeout(() => {
          refreshPage();
        }, 1000);
      }
    } catch (e) {
      toast.error(JSON.stringify(e.response.data?.description));
      // console.log(e);
    } finally {
      // setSubmitting(false);
    }
  };

  return (
    <div className="card border-0">
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
      {/* <div className="card-title">Tulis Review</div> */}
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="mb-3">
          {label ? <label className="form-label">{label}</label> : <></>}
          <select
            value={rating}
            className="form-select"
            multiple={false}
            onChange={ratingHandler}
          >
            {options.map((option, index) => {
              return (
                <option key={index} value={option.type}>
                  {option.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-3">
          <label className="">Testimonial</label>
          <textarea
            className="w-100"
            value={testimonial}
            onChange={testimonialHandler}
          />
        </div>
        <button
          type="submit"
          className="btn btn-altdanger"
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
    </div>
  );
};

export default AddTestimonial;
