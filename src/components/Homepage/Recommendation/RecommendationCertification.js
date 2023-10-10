import React from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useFetchData from "../../../hooks/useFetchData";
import CourseCard from "../../Course/CourseCard";
import Loading from "../../SideComponents/Loading/Loading";
import CertificationRecommendationCard from "./CertificationRecommendationCard";

function RecommendationCertification() {
  const { data: nationalcertification, loading: loadingNationalCertification } =
    useFetchData(
      "certification/get_certification?page=1&is_aktif=1&tipe=2&order_by=peserta_desc"
    );
  const {
    data: internationalcertification,
    loading: loadingInternationalCertification,
  } = useFetchData(
    "certification/get_certification?page=1&is_aktif=1&tipe=1&order_by=peserta_desc"
  );

  if (loadingInternationalCertification || loadingNationalCertification)
    return <Loading />;

  return (
    <section className="course__area pt-30 pb-20 bg-light">
      <Tabs variant="enclosed" id="react-tabs-276">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xxl-5 col-xl-6 col-lg-6">
              <div className="section__title-wrapper mb-20">
                <h2 className="section__title heading">
                  Rekomendasi{" "}
                  <span className="link-altdanger">Sertifikasi</span>
                </h2>
                <p>
                  Raih sertifikat untuk meningkatkan skill dan kompetensi kamu
                </p>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-6">
              <div className="course__menu d-flex justify-content-lg-end mb-60">
                <div className="masonary-menu filter-button-group">
                  <TabList>
                    <Tab>
                      <img
                        className="rec-image"
                        src="/assets/img/homepage/internationacertificate.png"
                        alt="img not found"
                      />
                      <button>International</button>
                    </Tab>
                    <Tab>
                      <img
                        className="rec-image"
                        src="/assets/img/homepage/nationalcertificate.png"
                        alt="img not found"
                      />
                      <button>National</button>
                    </Tab>
                  </TabList>
                </div>
              </div>
            </div>
          </div>
          <TabPanel>
            <div className="row">
              {internationalcertification.data?.slice(0, 3).map((dummyData) => (
                <div
                  key={dummyData.id_certification}
                  className="col-xxl-3 col-xl-4 col-lg-4 col-md-6"
                >
                  <CertificationRecommendationCard dummyData={dummyData} />
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="row">
              {nationalcertification.data?.slice(0, 3).map((dummyData) => (
                <div
                  key={dummyData.id_certification}
                  className="col-xxl-3 col-xl-4 col-lg-4 col-md-6"
                >
                  <CertificationRecommendationCard dummyData={dummyData} />
                </div>
              ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </section>
  );
}

export default RecommendationCertification;
