import React, { useState } from "react";
import Wrapper from "../../../components/Layout/Wrapper";
import useFetchData from "../../../hooks/useFetchData";
import Searchbox from "../../../components/Elements/Searchbox";
import Breadcrumb2 from "../../../components/Breadcrumb/Breadcrumb2";
import CertificationSidebar from "../../../components/Certification/CertificationSidebar";
import CertificationPageFilter from "../../../components/Certification/CertificationSidebarPageFilter";
import CertificationCard from "../../../components/Certification/CertificationCard";
import { Link } from "react-router-dom";
import Loading from "../../../components/SideComponents/Loading/Loading";
import { useSessionStorage } from "react-use";
import Pagination from "../../../components/Elements/Pagination";
import axios from "axios";
import { baseUrl } from "../../../api/baseUrl";
import { useQuery } from "react-query";
import { certificationdetails } from "../../../api/basePath";

function NationalCertification() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filtering, setFiltering] = useState("");
  const [filterLevel, setFilterLevel] = useState("");
  const [page, setPage] = useSessionStorage("nationalcert", 1);

  const getData = async () => {
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      baseUrl.baseUrl +
        "/certification/get_certification?is_aktif=1&tipe=2&search=" +
        searchQuery +
        "&page=" +
        page +
        "&order_by=" +
        filtering,
      header
    );
    return data;
  };

  const {
    isLoading: loadingCertificationData,
    isError,
    data: certificationData,
    error,
    refetch,
  } = useQuery(["nationalcert", searchQuery, filtering, page], getData);

  if (isError) {
    return <h1>{error}</h1>;
  }

  if (loadingCertificationData) return <Loading />;

  const breadcrumbContent = {
    title: "National Certification",
    desc: "Raih Sertifikasi Internasional dan standar kompetensi internasional bidang kuliner dan f&b",
  };

  return (
    <Wrapper>
      <Breadcrumb2 content={breadcrumbContent} />
      <section className="course__area pt-20 pb-20 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-xl-8 col-lg-8">
              <div className="container mb-10">
                <div className="row">
                  <div className="col-6 text-start">
                    Total {certificationData.row_count} data
                  </div>
                  <div className="col-6 text-end">
                    <Pagination
                      page={page}
                      setPage={setPage}
                      dummyData={certificationData.data}
                    />
                  </div>
                </div>
              </div>
              {certificationData?.data?.map((data) => (
                <Link
                  key={data.id_certification}
                  to={certificationdetails(data.id_certification)}
                >
                  <CertificationCard data={data} />
                </Link>
              ))}
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-4">
              <div className="course__sidebar pl-30">
                <div className="course__sidebar-course bg-light">
                  <Searchbox
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    label="Cari Sertifikasi"
                  />
                  <CertificationPageFilter
                    setFilterLevel={setFilterLevel}
                    filterLevel={filterLevel}
                    filtering={filtering}
                    setFiltering={setFiltering}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default NationalCertification;
