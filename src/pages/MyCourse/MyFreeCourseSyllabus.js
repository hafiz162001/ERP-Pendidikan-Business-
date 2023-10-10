import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
// import 'react-accessible-accordion/dist/fancy-example.css';
import useFetchDataWithAuth from "../../hooks/useFetchDataWithAuth";
import { useParams } from "react-router-dom";
import Wrapper from "../../components/Layout/Wrapper";
import Loading from "../../components/SideComponents/Loading/Loading";

function MyFreeCourseSyllabus() {
  const { id } = useParams();

  const { data: dataSyllabus, loading: loadingSyllabus } = useFetchDataWithAuth(
    "academy/get_customer_syllabus?id_customer_syllabus=" + id
  );
  if (loadingSyllabus) return <Loading />;

  return (
    <Wrapper>
      <div className="bg-light">
        <div
          className="heading-mycoursepage bg-cream-bb pt-120"
          style={{ zIndex: 1, position: "relative" }}
        >
          <div className="container">
            <h3 className="fw-bold">{dataSyllabus.data[0].name}</h3>
            {/* <h2 className='fw-bold'>Disini gambarnya ya nanti wkwk</h2> */}
            {/* <span className="d-block p-2 bg-dark text-white pt-50">Pembelajaran Saya</span> */}
          </div>
        </div>
        <div
          className="container"
          style={{ position: "relative", top: "-140px", zIndex: 2 }}
        >
          {dataSyllabus.data[0].video === "" ? (
            <>
              <div className="card border-0 shadow-sm rounded-3 pt-50 pl-50 pr-50 pb-20 mb-20">
                <div
                  dangerouslySetInnerHTML={{
                    __html: dataSyllabus.data[0].theory,
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <div className="card border-0 shadow-sm rounded-3 pt-20 pl-20 pr-20 pb-10 mb-20">
                <ReactPlayer
                  url={
                    "https://www.youtube.com/watch?v=" +
                    dataSyllabus.data[0].video
                  }
                  width="100%"
                  height="calc(100vh - 300px)"
                  controls={true}
                />
              </div>
              <div className="card border-0 shadow-sm rounded-3 pt-20 pl-20 pr-20 pb-20 mb-20">
                <Accordion
                  className="border-bottom"
                  allowMultipleExpanded="true"
                  allowZeroExpanded="true"
                >
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>Materi</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: dataSyllabus.data[0].theory,
                        }}
                      />
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </>
          )}

          <div className="card border-0 shadow-sm rounded-3 pt-20 pl-20 pr-20 pb-20">
            {dataSyllabus.data[0].status === 2 ? (
              <div className="alert alert-primary">
                Anda sudah lulus dengan score :{" "}
                <b> {dataSyllabus.data[0].score} </b>
              </div>
            ) : (
              <Link
                to={
                  "/myfreecoursequiz/" +
                  dataSyllabus.data[0].id_customer_syllabus
                }
              >
                <div className="d-grid gap-2">
                  <button className="btn btn-altdanger" type="button">
                    Quiz
                  </button>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default MyFreeCourseSyllabus;
