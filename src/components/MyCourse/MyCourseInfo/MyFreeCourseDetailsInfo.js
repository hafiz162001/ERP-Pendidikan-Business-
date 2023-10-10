import React from "react";
import useFetchDataWithAuth from "../../../hooks/useFetchDataWithAuth";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Loading from "../../SideComponents/Loading/Loading";
import TestimonialCourseDetails from "./TestimonialCourseDetails";
// import '../../assets/scss/library/_accessible_accordion.scss';

function MyFreeCourseDetailsInfo({ idCustomerCourse }) {
  const { data: customerCourse, loading: loadingCustomerCourse } =
    useFetchDataWithAuth(
      "academy/get_customer_course?id_customer_course=" + idCustomerCourse
    );
  if (loadingCustomerCourse) return <Loading />;
  return (
    <div className="container">
      <TestimonialCourseDetails id={idCustomerCourse} />
      {/*<Accordion allowMultipleExpanded='true' allowZeroExpanded='true'>
               <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                          Perbaikan course ke-1
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <p>
                          Beberapa video dalam course sudah diperbaiki dan dibuatkan
                          versi terbaru untuk perbaikan.
                      </p>
                  </AccordionItemPanel>
              </AccordionItem> 
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton>
                          Details Couse
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>*/}
      <div className="mb-50"></div>
      <div
        dangerouslySetInnerHTML={{
          __html: customerCourse.data[0].info_course,
        }}
      />
      {/* </AccordionItemPanel>
              </AccordionItem>
            </Accordion> */}
    </div>
  );
}

export default MyFreeCourseDetailsInfo;
