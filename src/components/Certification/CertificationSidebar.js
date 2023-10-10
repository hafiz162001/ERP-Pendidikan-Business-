import React from 'react'
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CertificationCard from './CertificationCard';

function CertificationSidebar(props) {
  return (
    <Tabs>
        <div className="course__tab-inner bg-pale-black mb-10">
            <div className="row align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="course__tab-wrapper d-flex align-items-center">
                    <div className="course__view">
                        <h4> {props.totalData} Course</h4>
                    </div>
                </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="course__sort d-flex justify-content-sm-end">
                </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xxl-12">
                <div className="row">
                    {props.freeCourseList ? props.freeCourseList.map((data)=> {
                        const freeCourseList= {
                            key: data.id_course,
                            nama: data.name,
                            info: data.info,
                            harga: data.price,
                            rating : data.rating,
                            silabus : data.number_of_syllabus,
                            penyedia : data.client_name,
                            jml_pengguna : data.number_of_students,
                            foto : data.photo,
                            deskripsi : data.description, 
                        }
                        return <CertificationCard key={freeCourseList.key} freeCourseList = {freeCourseList}/>
                    }) : <CertificationCard/>}                                                                                                                                                                                            
                </div>
            </div>
        </div>
    </Tabs>
  )
}

export default CertificationSidebar