import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function About() {
  return (
    <section className="about__area pt-90 pb-150">
        <div className="container">
            <div className="row">
                <div className="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6">
                    <div className="about__thumb-wrapper">
                    <div className="about__review">
                        <h5> <span>820+</span> ulasan dengan 5 bintang</h5>
                    </div>
                    <div className="about__thumb ml-100">
                        <img src="assets/img/about/about.png" alt="img not found" />
                    </div>
                    <div className="about__banner mt--210">
                        <img src="assets/img/about/about-banner.png" alt="img not found" />
                    </div>
                    <div className="about__student ml-270 mt--80">
                        <Link to="/course-details"><a>
                            <img src="assets/img/about/student-4.jpg" alt="img not found" />
                            <img src="assets/img/about/student-3.jpg" alt="img not found" />
                            <img src="assets/img/about/student-2.jpg" alt="img not found" />
                            <img src="assets/img/about/student-1.jpg" alt="img not found" />
                        </a></Link>
                        <p>Bersama <span>5000+</span> siswa</p>
                    </div>
                    </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6">
                    <div className="about__content pl-70 pr-60 pt-25">
                    <div className="section__title-wrapper mb-25">
                        <h2 className="section__title">Membangun Digital Startup <br /><span className="yellow-bg-big">from Ideas<img src="assets/img/shape/yellow-bg-2.png" alt="img not found" /></span>   to .. </h2>
                        <p>Melalui kelas yang tersedia berikut, kamu akan belajar membuat digital startup dimulai dari Idea hingga implementasi digital startup. Kamu dapat memulai sendiri membangun digital startup kamu melalui panduan Bakerspice Academy.</p>
                    </div>
                    <div className="about__list mb-35">
                        <ul>
                            <li className="d-flex align-items-center"><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Free Course.</li>
                            <li className="d-flex align-items-center"><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Master Class</li>
                            <li className="d-flex align-items-center"><i><FontAwesomeIcon icon={['fas', 'check']} /></i> Master Class + On Job Training</li>
                        </ul>
                    </div>
                    <Link to="/contact"><a className="e-btn e-btn-border">Daftar</a></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About