import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../auth/useUser";
import useScript from "../../hooks/useScript";
import duaImg from "../../assets/img/icons/2.png";
import limaImg from "../../assets/img/icons/5.png";
import empatImg from "../../assets/img/icons/4.png";
import tigaImg from "../../assets/img/icons/3.png";
import sembilanImg from "../../assets/img/icons/9.png";
import enamImg from "../../assets/img/icons/6.png";
import tujuhImg from "../../assets/img/icons/7.png";
import prakerjaImg from "../../assets/img/icons/Logo-kartu-prakerja.png";
import portofolioImg from "../../assets/img/icons/portofolio.png";
import kampusmerdekaImg from "../../assets/img/icons/kampusmerdeka_small.png";
import aiImg from "../../assets/img/icons/ai.png";
import duabelasImg from "../../assets/img/icons/12.png";
import sepuluhImg from "../../assets/img/icons/10.png";
import { basePath } from "../../api/basePath";

const Header2 = () => {
  const [menu, setMenu] = useState(true);

  const toggleNavbar = () => {
    // console.log("Mid");
    setMenu(!menu);
  };

  const user = useUser("");

  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [path, setPath] = useState("");

  // const { data: dataAuth, loading: loadingAuth } =
  //   useFetchDataWithAuth("cek_credential");
  // TODO this is dummy data
  const dataAuth = {
    data: [
      {
        name: "Akun",
      },
    ],
  };
  const loadingAuth = false;

  // useEffect(() => {
  //   setPath(navigate.pathname);
  // }, [navigate]);

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    // window.scrollTo(0, 0);
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  const signButton = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <div className="mt-3">
          <Link to={basePath.login}>
            <p className="e-btn e-btn-border rounded-pill">Sign In</p>
          </Link>
        </div>
      </li>
      <li className="nav-item">
        <div className="mt-3">
          <Link to="/signup">
            <p className="e-btn rounded-pill pl-20 pr-20">Sign Up</p>
          </Link>
        </div>
      </li>
    </ul>
  );

  const signButtonMobile = (
    <li className="nav-item">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="megamenu-submenu">
              <h4

                className="fw-bold"
              > Akun
              </h4>
            </ul>
            <ul className="megamenu-submenu">
              <div className="d-flex">
                <div className="mt-3 bd-highlight">
                  <Link style={{ marginLeft: "0px", paddingLeft: "0px" }} to={basePath.login}>
                    <p className="e-btn e-btn-border rounded-pill pl-20 pr-20">Sign In</p>
                  </Link>
                </div>


                <div className="mt-3 bd-highlight">
                  <Link to="/signup">
                    <p className="e-btn rounded-pill pl-20 pr-20">Sign Up</p>
                  </Link>
                </div>
              </div>


            </ul>
          </div>
        </div>
      </div>
    </li>
  );

  function refreshPage() {
    window.location.reload(false);
  }

  const logOut = () => {
    localStorage.removeItem("token");
    // navigate("/");
    refreshPage();
  };

  const userProfile = (

    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="#">
          <a
            onClick={(e) => e.preventDefault()}
            className="dropdown-toggle nav-link"
          >
            {user ? dataAuth.data[0].name : "Akun"}
          </a>
        </Link>
        <ul className="dropdown-menu" id="dropdown-menu-hidden">
          <li className="nav-item">
            <Link to="/myfreecourse">My Course</Link>
          </li>
          <li className="nav-item">
            <Link to="/profile">My Profile</Link>
          </li>
          <li className="nav-item">
            <Link to="/myportofolio">My Portofolio</Link>
          </li>
          <li className="nav-item">
            <span className="btn btn-altdanger ml-20" onClick={logOut}>
              Logout
            </span>
          </li>
        </ul>

        {/* <img
          src={
            dataAuth?.data[0].photo
              ? "https://portal2.bisaai.id:8080/bisa_business_dev/users/media/" +
                dataAuth.data[0].photo
              : "/assets/img/profile/blankprofile.png"
          }
          className="rounded-circle header__profile img-thumbnail"
          style={{ objectFit: "cover" }}
        />{" "} */}
      </li>
    </ul>

  );

  const userProfileMobile = (
    <li className="nav-item">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="megamenu-submenu">
              <li>
                <Link to="#">
                  <h4
                    onClick={(e) => e.preventDefault()}
                    className="fw-bold"
                  >
                    {user ? dataAuth.data[0].name : "Akun"}
                  </h4>
                </Link>
              </li>
            </ul>


          </div>
          <div className="col">
            {/* <h6 className="submenu-title">Pages I</h6> */}
            <ul className="megamenu-submenu">

              <li>
                <Link to="/myfreecourse">My Course</Link>
              </li>
              <li>
                <Link to="/profile">My Profile</Link>
              </li>
              <li>
                <Link to="/myportofolio">My Portofolio</Link>
              </li>
              <li className="mt-3">
                <button className="btn btn-altdanger" onClick={logOut}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  )

  const Logo = () => {
    {/* make if window widht > 100px choose another image */ }
    if (window.innerWidth >= 768) {
      return <span className="navbar-brand">
        <img
          className="logo-header"
          src="/assets/img/homepage/logo_bisabusiness.png"
          alt="logo"
        />
      </span>
    } else {
      return <span className="navbar-brand">
        <img
          className="logo-header"
          src="/assets/img/homepage/logo_mobile.png"
          alt="logo"
        />
      </span>
    }
  }


  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="texap-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light bg-light">

              <Link to="/">
                <Logo />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item megamenu" id="acc-megamenu">
                    <Link to="#">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="dropdown-toggle nav-link"
                      >
                        Akun
                      </a>
                    </Link>
                    <ul className="dropdown-menu">


                      {!user ? signButtonMobile : userProfileMobile}

                    </ul>
                  </li>
                  <li className="nav-item megamenu">
                    <Link to="#">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="dropdown-toggle nav-link"
                      >
                        Course Academy
                      </a>
                    </Link>

                    <ul className="dropdown-menu">

                      <li className="nav-item">
                        <div className="container">
                          <div className="row">
                            <div className="col">
                              <ul className="megamenu-submenu">
                                <li>
                                  <h4 className="fw-bold">Course Academy</h4>
                                  <div className="fw-bolder">
                                    Pembelajaran Online atau Offline melalui
                                    platform BakerSpice Academy dengan Materi
                                    Pilihan, Instruktur Profesional dan Learning
                                    Path Belajar yang menarik
                                  </div>
                                </li>
                              </ul>
                              {/* <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                className="d-block p-0"
                              >
                                <img src="/images/navbar.jpg" alt="image" />
                              </a> */}
                            </div>
                            <div className="col">
                              {/* <h6 className="submenu-title">Pages I</h6> */}
                              <ul className="megamenu-submenu">
                                <li>
                                  <Link
                                    to="/freecourse"
                                    // className="active"
                                    activeClassName=""
                                  >
                                    <span onClick={toggleNavbar}>
                                      <img
                                        className="header__icon"
                                        src={duaImg}
                                        alt="img not found"
                                      />
                                      Free Course
                                      <div>
                                        +50 Course GRATIS untuk kamu memulai
                                        belajar
                                      </div>
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/masterclass"
                                    activeClassName="active"
                                  >
                                    <span onClick={toggleNavbar}>
                                      <img
                                        className="header__icon"
                                        src={limaImg}
                                        alt="img not found"
                                      />
                                      Master Class
                                      <div>
                                        +10 Master Class on Job Training selama
                                        15 hari belajar melalui module dan
                                        silabus serta 15 hari on Job Training di
                                        BakerSpice Academy
                                      </div>
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              {/* <h6 className="submenu-title">Pages II</h6> */}
                              <ul className="megamenu-submenu">
                                <li>
                                  <Link
                                    to="/masterclassojt"
                                    activeClassName="active"
                                  >
                                    <span onClick={toggleNavbar}>
                                      <img
                                        className="header__icon"
                                        src={empatImg}
                                        alt="img not found"
                                      />
                                      Master Class + On Job
                                      <div>
                                        Pelatihan secara tatap muka langsung
                                        dengan instruktur dibantu dengan modul
                                        pembelajaran yang lengkap
                                      </div>
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              {/* <h6 className="submenu-title">Pages III</h6> */}
                              <ul className="megamenu-submenu">
                                <li>
                                  <Link
                                    to="/learningpath"
                                    activeClassName="active"
                                  >
                                    <span onClick={toggleNavbar}>
                                      <img
                                        className="header__icon"
                                        src={tigaImg}
                                        alt="img not found"
                                      />
                                      Learning Path
                                      <div>
                                        Membantu menemukan pola dan path belajar
                                        terbaik bidang bisnis, finance dan
                                        digital startup
                                      </div>
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <a
                                    href="https://tampil.id/"
                                    activeClassName="active"
                                  >
                                    <span onClick={toggleNavbar}>
                                      <img
                                        className="header__icon"
                                        src={sembilanImg}
                                        alt="img not found"
                                      />
                                      Webinar
                                      <div>
                                        Ikuti Webinar terkait bisnis, finance
                                        dan digital startup melalui TAMPIL
                                      </div>
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <Link to="/faq" activeClassName="active">
                                    {/* <a onClick={toggleNavbar}>FAQ</a> */}
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* <h6 className="submenu-title"></h6> */}
                          <div className="mb-10 mt-10 border-top border-1"></div>
                          <div className="row">
                            <div className="col">
                              <ul className="megamenu-submenu">
                                <li>
                                  <h4 className="fw-bold">Special Program</h4>
                                  {/* <p>loremIpsum</p> */}
                                </li>
                              </ul>
                              {/* <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                className="d-block p-0"
                              >
                                <img src="/images/navbar.jpg" alt="image" />
                              </a> */}
                            </div>
                            <div className="col">
                              <ul className="megamenu-submenu">
                                <li>
                                  <Link to="/prakerja" activeClassName="active">
                                    <span onClick={toggleNavbar}>
                                      <img
                                        className="header__icon"
                                        src={prakerjaImg}
                                        alt="img not found"
                                      />
                                      Prakerja
                                      <div>
                                        Ikuti pelatihan Bakerspice Academy
                                        melalui program Kartu Prakerja
                                      </div>
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/portofolio"
                                    activeClassName="active"
                                  >
                                    <span onClick={toggleNavbar}>
                                      <img
                                        className="header__icon"
                                        src={portofolioImg}
                                        alt="img not found"
                                      />
                                      Portofolio
                                      <div>
                                        Lihat Portofolio yang dihasilkan peserta
                                        pelatihan Bakerspice Academy
                                      </div>
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col">
                              {/* <h6 className="submenu-title">Pages I</h6> */}
                              <ul className="megamenu-submenu">
                                <li>
                                  <Link
                                    to="/kampusmerdeka"
                                    activeClassName="active"
                                  >
                                    <span onClick={toggleNavbar}>
                                      <img
                                        className="header__icon"
                                        src={kampusmerdekaImg}
                                        alt="img not found"
                                      />
                                      Kampus Merdeka
                                      <div>
                                        Ikuti Program Magang dan Studi
                                        Independen Bersertifikat Bakerspice
                                        Academy
                                      </div>
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col">
                              <ul className="megamenu-submenu">
                                <li>
                                  <a
                                    href="https://ai-creation.id/"
                                    activeClassName="active"
                                  >
                                    <span onClick={toggleNavbar}>
                                      <img
                                        className="header__icon"
                                        src={aiImg}
                                        alt="img not found"
                                      />
                                      AI Creation
                                      <div>
                                        Membantu menemukan pola dan path belajar
                                        terbaik bidang bisnis, finance dan
                                        digital startup
                                      </div>
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item megamenu">
                    <Link to="#">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="dropdown-toggle nav-link"
                      >
                        Certification
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <div className="container">
                          <div className="row">
                            <div className="col">
                              <ul className="megamenu-submenu">
                                <li>
                                  <h4 className="fw-bold">Certification</h4>
                                  <p className="fw-bold">
                                    Raih sertifikat untuk meningkatkan skill dan
                                    kompetensi kamu
                                  </p>
                                </li>
                              </ul>
                              {/* <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                className="d-block p-0"
                              >
                                <img src="/images/navbar.jpg" alt="image" />
                              </a> */}
                            </div>
                            <div className="col">
                              {/* <h6 className="submenu-title">Pages I</h6> */}
                              <ul className="megamenu-submenu">
                                <li>
                                  <Link
                                    to="/internationalcertification"
                                    activeClassName=""
                                  // className="active"
                                  >
                                    <span onClick={toggleNavbar}>
                                      <img
                                        className="header__icon"
                                        src={enamImg}
                                        alt="img not found"
                                      />
                                      International Certification
                                      <div>
                                        Raih Sertifikasi International dan standard kompetensi international dari vendor teknologi dunia bidang Business, Manajemen, Finance dan dan food startup. Ikuti Pelatihan Singkat dan Sertifikasi-nya melalui Bakerspice Academy
                                      </div>
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              {/* <h6 className="submenu-title">Pages II</h6> */}
                              <ul className="megamenu-submenu">
                                <li>
                                  <Link
                                    to="/nationalcertification"
                                    activeClassName="active"
                                  >
                                    <span onClick={toggleNavbar}>
                                      <img
                                        className="header__icon"
                                        src={tujuhImg}
                                        alt="img not found"
                                      />
                                      National Certification
                                      <div>
                                        Raih Sertifikasi Internasional dan standar kompetensi internasional bidang kuliner dan f&b
                                      </div>
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item megamenu">
                    <Link to="#">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="dropdown-toggle nav-link"
                      >
                        Informasi
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <div className="container">
                          <div className="row">
                            {/* <div className="col">
                              <ul className="megamenu-submenu">
                                <li>
                                  <h4 className="fw-bold">Certification</h4>
                                  <p className="fw-bold">
                                    Raih sertifikat untuk meningkatkan skill dan
                                    kompetensi kamu
                                  </p>
                                </li>
                              </ul>
                              {/* <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                className="d-block p-0"
                              >
                                <img src="/images/navbar.jpg" alt="image" />
                              </a> 
                            </div> */}
                            <div className="col">
                              {/* <h6 className="submenu-title">Pages I</h6> */}
                              <ul className="megamenu-submenu">
                                <li>
                                  <Link
                                    to="/testimonial"
                                    activeClassName=""
                                  // className="active"
                                  >
                                    <span onClick={toggleNavbar}>
                                      <img
                                        className="header__icon"
                                        src={duabelasImg}
                                        alt="img not found"
                                      />
                                      Testimonial
                                      <div>Kumpulan testimoni pengguna.</div>
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              {/* <h6 className="submenu-title">Pages II</h6> */}
                              <ul className="megamenu-submenu">
                                <li>
                                  <Link
                                    to="/colaboration"
                                    activeClassName="active"
                                  >
                                    <span onClick={toggleNavbar}>
                                      <img
                                        className="header__icon"
                                        src={sepuluhImg}
                                        alt="img not found"
                                      />
                                      Kolaborasi Akademi
                                      <div>
                                        Kolaborasi penyelenggaraan course.
                                      </div>
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            {/* <div className="col">
                              <ul className="megamenu-submenu">
                                <li>
                                  <Link
                                    to="/"
                                    activeClassName="active"
                                  >
                                    <span onClick={toggleNavbar}>
                                      <img
                                        className="header__icon"
                                        src="https://bisa.business/assets/images/icons/6.png"
                                        alt="img not found"
                                      />
                                      Kolaborasi Akademi
                                      <div>
                                        Kolaborasi penyelenggaraan course.
                                      </div>
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div> */}
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  {/* <li className="nav-item">
                    <Link to="#">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="dropdown-toggle nav-link"
                      >
                        Certification
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          to="/internationalcertification"
                          activeClassName="active"
                        >
                          <a onClick={toggleNavbar}>
                            <img
                              className="header__icon"
                              src="https://bisa.business/assets/images/icons/6.png"
                              alt="img not found"
                            />
                            International Certification
                            <div>
                              Raih Sertifikasi International dan standard
                              kompetensi international dari vendor teknologi
                              dunia bidang Business, Manajemen, Finance dan
                              Digital Startup. Ikuti Pelatihan Singkat dan
                              Sertifikasi-nya melalui Bakerspice Academy.
                            </div>
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/nationalcertification"
                          activeClassName="active"
                        >
                          <a onClick={toggleNavbar}>
                            <img
                              className="header__icon"
                              src="https://bisa.business/assets/images/icons/6.png"
                              alt="img not found"
                            />
                            National Certification
                            <div>
                              Raih Sertifikasi Nasional berstandard SKKNI dari
                              BNSP bidang Business, Manajemen, Finance dan
                              Digital Startup. Ikuti Pelatihan Singkat dan
                              Sertifikasi-nya melalui Bakerspice Academy
                            </div>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  {/* <li className="nav-item megamenu">
                    <Link to="#">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="dropdown-toggle nav-link"
                      >
                        Pages
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <div className="container">
                          <div className="row">
                            <div className="col">
                              <h6 className="submenu-title">Pages I</h6>
                              <ul className="megamenu-submenu">
                                <li>
                                  <Link to="/team" activeClassName="active">
                                    <a onClick={toggleNavbar}>Team 1</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/team-2" activeClassName="active">
                                    <a onClick={toggleNavbar}>Team 2</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/how-it-works"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>How It Works</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/gallery" activeClassName="active">
                                    <a onClick={toggleNavbar}>Gallery</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/services" activeClassName="active">
                                    <a onClick={toggleNavbar}>Services</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/pricing" activeClassName="active">
                                    <a onClick={toggleNavbar}>Pricing Plan</a>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <h6 className="submenu-title">Pages II</h6>
                              <ul className="megamenu-submenu">
                                <li>
                                  <Link to="/feedback" activeClassName="active">
                                    <a onClick={toggleNavbar}>Reviews</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/sign-in" activeClassName="active">
                                    <a onClick={toggleNavbar}>Sign In</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/sign-up" activeClassName="active">
                                    <a onClick={toggleNavbar}>Sign Up</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/forget-password"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>
                                      Forget Password
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/privacy-policy"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>Privacy Policy</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/terms-conditions"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>
                                      Terms & Conditions
                                    </a>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <h6 className="submenu-title">Pages III</h6>
                              <ul className="megamenu-submenu">
                                <li>
                                  <Link
                                    to="/screenshots"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>Screenshots</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/faq" activeClassName="active">
                                    <a onClick={toggleNavbar}>FAQ</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/coming-soon"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>Coming Soon</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/404" activeClassName="active">
                                    <a onClick={toggleNavbar}>404 Error Page</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/app-download"
                                    activeClassName="active"
                                  >
                                    <a onClick={toggleNavbar}>App Download</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/contact" activeClassName="active">
                                    <a onClick={toggleNavbar}>Contact Us</a>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                className="d-block p-0"
                              >
                                <img src="/images/navbar.jpg" alt="image" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </div>

              <div className="others-options">
                {!user ? signButton : userProfile}
                {/* <Link to="/contact">
                  <a className="default-btn">Get Started</a>
                </Link> */}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header2;
