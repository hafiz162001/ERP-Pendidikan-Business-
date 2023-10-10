import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { paths } from "../../utils/routerPaths";
import { additionalUrl } from "../../api/baseUrl";

const Footer = ({ color = "light" }) => {
  return (
    <footer>
      <div
        className={`footer__area ${
          color === "light" ? "bg-light" : "bg-cream-bb"
        }`}
      >
        {/* <div className="container">
          <div className="border-top border-2 border-dark"></div>
        </div> */}
        <div className="footer__top pt-100">
          <div className="container">
            <div className="row">
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-6 mt-5">
                <div className="footer__widget">
                  <div className="footer__widget-head mb-22">
                    <div className="footer__logo">
                      <Link to="/">
                        <img
                          className="footer-logo"
                          src="/assets/img/homepage/logo_bisabusiness.png"
                          alt="img not found"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="footer__widget-body footer__widget-body-2">
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 offset-lg-0 col-md-3 col-sm-6 col-xs-6 mt-5">
                <div className="footer__widget">
                  <div className="footer__widget-head mb-22">
                    <h3 className="footer__widget-title footer__widget-title-2">
                      Course Academy
                    </h3>
                  </div>
                  <div className="footer__widget-body">
                    <div className="footer__link footer__link-2">
                      <ul>
                        <div>
                          <Link to={paths.freecourse}>Free Course</Link>
                        </div>
                        <div>
                          <Link to={paths.masterclass}>Master Class</Link>
                        </div>
                        <div>
                          <Link to={paths.masterclassojt}>
                            Master Class + OJT
                          </Link>
                        </div>
                        <div>
                          <Link to={paths.learningpath}>Learning Path</Link>
                        </div>
                        <div>
                          <Link to={paths.prakerja}>Prakerja</Link>
                        </div>
                        <div>
                          <Link to={paths.kampusmerdeka}>Kampus Merdeka</Link>
                        </div>
                        <div>
                          <Link to={paths.portofolio}>Portofolio</Link>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-2 offset-lg-0 col-md-3 col-sm-6 col-xs-6 mt-5">
                <div className="footer__widget">
                  <div className="footer__widget-head mb-22">
                    <h3 className="footer__widget-title footer__widget-title-2">
                      Sertifikasi
                    </h3>
                  </div>
                  <div className="footer__widget-body">
                    <div className="footer__link footer__link-2">
                      <ul>
                        <div>
                          <Link to={paths.nationalcertification}>
                            Sertifikasi Nasional
                          </Link>
                        </div>
                        <div>
                          <Link to={paths.internationalcertification}>
                            Sertifikasi Internasional
                          </Link>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer__widget">
                  <div className="footer__widget-head mb-22">
                    <h3 className="footer__widget-title footer__widget-title-2">
                      Informasi
                    </h3>
                  </div>
                  <div className="footer__widget-body">
                    <div className="footer__link footer__link-2">
                      <ul>
                        <div>
                          <Link to={paths.testimonial}>Testimonial</Link>
                        </div>
                        <div>
                          <Link to={paths.collaboration}>Kolaborasi</Link>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-3 col-sm-6 col-xs-6 mt-5">
                <div className="footer__widget footer__pl-70 mb-50">
                  <div className="footer__widget-head mb-22">
                    <h3 className="footer__widget-title footer__widget-title-2">
                      Kontak Kami
                    </h3>
                  </div>
                  <div className="footer__widget-body">
                    <div className="footer__link footer__link-2">
                      <ul>
                        <li>
                          PT DTC Pangan Utama <br></br>
                          Bakerspice Academy
                        </li>
                        <li>
                          <div className="d-flex flex-row">
                            <div className="bd-highlight pe-3">
                            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                            </div>
                            <div className=" bd-highlight">
                            <ul>
                              <li>
                              Jln. Petogogan 1 No.41, Jakarta Selatan
                              </li>
                              {/* <li>
                              <b>Branch :</b> Jl. Petogogan 1 No.41, Jakarta Selatan
                              </li> */}
                            </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex flex-row">
                            <div className="pe-2 bd-highlight">
                            <FontAwesomeIcon  icon="fa-solid fa-phone" />
                            </div>
                            <div className=" bd-highlight">
                              +62-8211-6654-087
                            </div>
                          </div>
                          
                        </li>
                        <li>
                          <div className="d-flex flex-row">
                          <div className="pe-2 bd-highlight">
                            <FontAwesomeIcon icon="fa-solid fa-envelope" />
                            </div>
                          
                            <div className="bd-highlight">
                            dtcpanganutama@gmail.com
                            </div>
                          </div>
                          
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom footer__bottom-2">
          <div className="footer">
            <div className="container">
              <div className="row">
                <div className="col-md-5 col-5">
                  <p>
                    © 2022. Created with love by{" "}
                    <a target="_blank">
                      <span className="link-red-bb">Bakerspice</span>
                    </a>
                  </p>
                </div>

                <div className="col-md-7 col-7 d-flex justify-content-end footer__social">
                  <ul className="">
                    {/* <li>
                      {" "}
                      <img
                        className="footer-image"
                        src="/assets/img/homepage/appstore.png"
                        alt="img not found"
                      ></img>
                    </li> */}
                    <a className="mr-10" href={additionalUrl.playStore}>
                      <li>
                        <img
                          className="footer-image"
                          src="/assets/img/homepage/playstore.png"
                          alt="img not found"
                        />
                      </li>
                    </a>
                    <li>
                      <a href={additionalUrl.instagram}>
                        <FontAwesomeIcon icon="fa-brands fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href={additionalUrl.linkedin}>
                        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href={additionalUrl.telegram}>
                        <FontAwesomeIcon icon="fa-brands fa-telegram" />
                      </a>
                    </li>
                    <li>
                      <a href={additionalUrl.youtube}>
                        <FontAwesomeIcon icon="fa-brands fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href={additionalUrl.medium}>
                        <FontAwesomeIcon icon="fa-brands fa-medium" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
