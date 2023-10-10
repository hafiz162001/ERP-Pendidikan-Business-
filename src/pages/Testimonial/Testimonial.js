import React, { useEffect, useState } from "react";
import Breadcrumb3 from "../../components/Breadcrumb/Breadcrumb3";
import Search from "../../components/Elements/Search";
import Wrapper from "../../components/Layout/Wrapper";
import Loading from "../../components/SideComponents/Loading/Loading";
import SelectTestimonialRating from "../../components/Testimonial/SelectTestimonialRating";
import SelectTestimonialStatus from "../../components/Testimonial/SelectTestimonialStatus";
import TestimonialCourseCard from "../../components/Testimonial/TestimonialCourseCard";
import useFetchData from "../../hooks/useFetchData";
import { useSessionStorage } from "react-use";
import Pagination from "../../components/Elements/Pagination";
import { useFetchTestimonials } from "../../api/testimonial";

const dummyData = [
  {
    address: "Kp.susukan rt03/rw02 No.41  desa susukan kecamatan bojonggede",
    date_of_birth: "Mon, 11 Dec 2000 00:00:00 GMT",
    email: "murdikaw@upnvj.ac.id",
    gender: 1,
    id_course: 5,
    id_customer: 287,
    id_customer_course: 783,
    id_customer_graduate: 783,
    instansi: null,
    is_aktif: 1,
    nama_course: "Manajemen",
    nama_user: "Murdika wahyuda",
    phone: "085891285462",
    photo: "2022-06-15_165603288.jpg",
    rating: 5,
    testimonial: "seru sekali mengerjakan course nya",
    waktu_input: "Fri, 17 Jun 2022 10:21:10 GMT",
  },
  {
    address: "Kp.susukan rt03/rw02 No.41  desa susukan kecamatan bojonggede",
    date_of_birth: "Mon, 11 Dec 2000 00:00:00 GMT",
    email: "murdikaw@upnvj.ac.id",
    gender: 1,
    id_course: 8,
    id_customer: 287,
    id_customer_course: 787,
    id_customer_graduate: 787,
    instansi: null,
    is_aktif: 1,
    nama_course: "Manajemen Sumber Daya Manusia",
    nama_user: "Murdika wahyuda",
    phone: "085891285462",
    photo: "2022-06-15_165603288.jpg",
    rating: 5,
    testimonial: "seru sekali mengerjakan course ini",
    waktu_input: "Fri, 17 Jun 2022 10:20:35 GMT",
  },
];

const Testimonial = () => {
  const breadcrumbContent = {
    title: "Testimonial",
  };

  const [status, setStatus] = useState("");
  const [rating, setRating] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useSessionStorage("testimonialpage", 1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    isLoading: loadingTestimonials,
    isError,
    data: dataTestimonials,
    error,
    refetch,
  } = useFetchTestimonials({ rating, search, status, page });

  if (isError) {
    return <h1>{error.status}</h1>;
  }

  if (loadingTestimonials) return <Loading />;

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  const ratingHandler = (e) => {
    setRating(e.target.value);
  };
  const searchHandler = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };

  return (
    <Wrapper>
      <Breadcrumb3 content={breadcrumbContent} />
      <div className="bg-light">
        <div className="container pt-30 pb-30">
          <div className="row mb-3">
            <div className="col-3">
              <SelectTestimonialStatus
                value={status}
                // options={dummyData.status}
                selectHandler={statusHandler}
              />
            </div>
            <div className="col-3">
              <SelectTestimonialRating
                value={rating}
                // options={kategoriPortofolio.data}
                selectHandler={ratingHandler}
              />
            </div>
            <div className="col-3"></div>
            <div className="col-3">
              <Search placeholder="Pencarian" searchHandler={searchHandler} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {loadingTestimonials ? (
                <Loading />
              ) : (
                <>
                  {dataTestimonials?.data.map((testimonial) => (
                    <TestimonialCourseCard
                      key={testimonial.id_testimonial}
                      testimonial={testimonial}
                    />
                  ))}
                </>
              )}
            </div>
            <div className="container mt-10">
              <div className="row">
                <div className="col-6 text-start">
                  Total {dataTestimonials.row_count} data
                </div>
                <div className="col-6 text-end">
                  <Pagination
                    page={page}
                    setPage={setPage}
                    dummyData={dataTestimonials.data}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Testimonial;
