import React from "react";
import PortofolioCard from "../Portofolio/PortofolioCard";
import { useQuery } from "react-query";
import axios from "axios";
import { baseUrl } from "../../api/baseUrl";
import Loading from "../SideComponents/Loading/Loading";
import { Link } from "react-router-dom";
import { portofoliodetails } from "../../api/basePath";

const dummyData = {
  title:
    "Portfolio Mahasiswa Peserta Kampus Merdeka MSIB Bakerspice Academy",
  description:
    "Mahasiswa Kampus Merdeka MSIB Bakerspice Academy membuat berbagai proyek / produk yang menghasilkan portfolio. Berikut merupakan list portfolio yang dibuat mahasiswa",
};

const PortofolioSection = () => {
  const getData = async () => {
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      baseUrl.baseUrl + "/portofolio/get_portofolio_landing?mode=2&limit=3",
      header
    );
    return data;
  };

  const {
    isLoading: loadingPortofolio,
    isError,
    data: dataPortofolio,
    error,
    refetch,
  } = useQuery("portofoliokm", getData);

  if (isError) {
    return <h1>{error}</h1>;
  }

  const dummyData = {
    title:
      "Portfolio Mahasiswa Peserta Kampus Merdeka MSIB Bakerspice Academy",
    description:
      "Mahasiswa Kampus Merdeka MSIB Bakerspice Academy membuat berbagai proyek / produk yang menghasilkan portfolio. Berikut merupakan list portfolio yang dibuat mahasiswa",
    portofolios: dataPortofolio?.data,
    row_count: dataPortofolio?.row_count,
  };
  return (
    <div className="bg-light pt-100 pb-100">
      <div className="container">
        <h3 className="fw-bold">{dummyData.title}</h3>
        <p>{dummyData.description}</p>
        <div className="row">
          {/* <div className="col-4">
            <PortofolioCard />
          </div>
          <div className="col-4"></div> */}
          {loadingPortofolio ? (
            <Loading />
          ) : (
            <>
              <div className="row">
                {dummyData.portofolios.map((portofolio) => (
                  <div key={portofolio.id_portofolio} className="col-4">
                    <Link to={portofoliodetails(portofolio.id_portofolio)}>
                      <PortofolioCard portofolio={portofolio} />
                    </Link>
                  </div>
                ))}
                <div className="text-center">
                  <Link to={"/portofolio/"}>
                    <button className="btn btn-altdanger">Lihat lainnya</button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortofolioSection;
