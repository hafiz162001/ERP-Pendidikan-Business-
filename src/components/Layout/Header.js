import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import BurgerMenus from "./BurgerMenus";
import useScript from "../../hooks/useScript";
import { useUser } from "../../auth/useUser";
import useFetchDataWithAuth from "../../hooks/useFetchDataWithAuth";
import Loading from "../SideComponents/Loading/Loading";
import { basePath } from "../../api/basePath";

const Header = () => {
  const user = useUser("");

  useScript("https://code.jquery.com/jquery-3.2.1.slim.min.js");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [path, setPath] = useState("");

  // const { data: dataAuth, loading: loadingAuth } =
  //   useFetchDataWithAuth("cek_credential");
  // TODO this is dummy data
  const dataAuth = {
    data: [
      {
        name: "User",
      },
    ],
  };
  const loadingAuth = false;

  useEffect(() => {
    setPath(navigate.pathname);
  }, [navigate]);

  // Sticky Menu Area start
  useEffect(() => {
    window.addEventListener("scroll", sticky);
    return () => {
      window.removeEventListener("scroll", sticky);
    };
  });

  const sticky = (e) => {
    const header = document.querySelector(".header__area");
    const scrollTop = window.scrollY;
    scrollTop >= 1
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  };
  // Sticky Menu Area End

  if (user && loadingAuth) return <Loading />;
  // console.log(dataAuth);

  const signButton = (
    <>
      <li className="has-dropdown">
        <div className="header__btn header__btn-2 d-none d-sm-block">
          <Link to={basePath.login}>
            <p className="e-btn e-btn-border rounded-pill">Sign In</p>
          </Link>
        </div>
      </li>
      <li className="has-dropdown">
        <div className="header__btn header__btn-2 d-none d-sm-block">
          <Link to="/signup">
            <p className="e-btn rounded-pill pl-20 pr-20">Sign Up</p>
          </Link>
        </div>
      </li>
    </>
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
    <li className="has-dropdown">
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
      {user ? dataAuth.data[0].name : "Username"}
      <ul className="submenu">
        <li>
          <Link to="/myfreecourse">My Course</Link>
        </li>
        <li>
          <Link to="/profile">My Profile</Link>
        </li>
        <li>
          <Link to="/myportofolio">My Portofolio</Link>
        </li>
        <li>
          <button className="btn bg-red" onClick={logOut}>
            Logout
          </button>
        </li>
        {/* <li><Link to="/blog-details"><a>Blog Details</a></Link></li> */}
      </ul>
    </li>
  );
  {
    /* <div className='ml-50'>
		
		<span className='ml-20'>Username</span>
		<span className='ml-50'>
			<button 
			className='btn bg-red'
			onClick={logOut}
			>Logout</button>
		</span>
	</div>; */
  }

  return (
    <React.Fragment>
      <header>
        <div
          id="header-sticky"
          className="header__area header__transparent header__padding-2"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-2 col-sm-4 col-6">
                <div className="header__left d-flex">
                  <div className="logo">
                    <Link to="/">
                      <img
                        className="logo-header"
                        src="/assets/img/homepage/logo_bisabusiness.png"
                        alt="logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xxl-9 col-xl-9 col-lg-8 col-md-10 col-sm-8 col-6">
                <div className="header__right d-flex justify-content-end align-items-center">
                  <div className="main-menu main-menu-2 d-none d-xl-block">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="has-dropdown">
                          <Link to="/">Courses</Link>
                          <ul className="submenu">
                            <li>
                              <Link to="/freecourse">
                                <img
                                  className="header__icon"
                                  src="https://bisa.business/assets/images/icons/2.png"
                                  alt="img not found"
                                />
                                Free Course
                              </Link>
                            </li>
                            <li>
                              <Link to="/masterclass">
                                <img
                                  className="header__icon"
                                  src="https://bisa.business/assets/images/icons/5.png"
                                  alt="img not found"
                                />
                                Master Class
                              </Link>
                            </li>
                            <li>
                              <Link to="/masterclassojt">
                                <img
                                  className="header__icon"
                                  src="https://bisa.business/assets/images/icons/4.png"
                                  alt="img not found"
                                />
                                Master Class + OJT
                              </Link>
                            </li>
                            <li>
                              <Link to="/learningpath">
                                <img
                                  className="header__icon"
                                  src="https://bisa.business/assets/images/icons/3.png"
                                  alt="img not found"
                                />
                                Learning Path
                              </Link>
                            </li>
                            <li>
                              <Link to="/prakerja">
                                <img
                                  className="header__icon"
                                  src="https://bisa.business/assets/img/2022/Logo-kartu-prakerja.png"
                                  alt="img not found"
                                />
                                Prakerja
                              </Link>
                            </li>
                            <li>
                              <a href="https://ai-creation.id/">
                                <img
                                  className="header__icon"
                                  src="https://bisa.business/assets/img/2022/ai.png"
                                  alt="img not found"
                                />
                                AI Creation
                              </a>
                            </li>
                            <li>
                              <Link to="/portofolio">
                                <img
                                  className="header__icon"
                                  src="https://bisa.business/assets/img/2022/portofolio.png"
                                  alt="img not found"
                                />
                                Portofolio
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <Link to="">Certification</Link>
                          <ul className="submenu">
                            <li>
                              <Link to="/nationalcertification">
                                <img
                                  className="header__icon"
                                  src="https://bisa.business/assets/images/icons/6.png"
                                  alt="img not found"
                                />
                                National Certification
                              </Link>
                            </li>
                            <li>
                              <Link to="/internationalcertification">
                                <img
                                  className="header__icon"
                                  src="https://bisa.business/assets/images/icons/7.png"
                                  alt="img not found"
                                />
                                International Certification
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <Link to="">Certification</Link>
                          <ul className="submenu">
                            <li>
                              <Link to="/nationalcertification">
                                <img
                                  className="header__icon"
                                  src="https://bisa.business/assets/images/icons/6.png"
                                  alt="img not found"
                                />
                                National Certification
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <Link to="">Program Lainnya</Link>
                          <ul className="submenu">
                            <li>
                              <Link to="/colaboration">Kolaborasi Academy</Link>
                            </li>
                            {/* <li><Link to='/testapi'>Test API</Link></li> */}
                          </ul>
                        </li>
                        {!user ? signButton : userProfile}
                      </ul>
                    </nav>
                  </div>

                  <div className="sidebar__menu d-xl-none">
                    <div
                      className="sidebar-toggle-btn ml-30"
                      id="sidebar-toggle"
                      onClick={() => {
                        setMenuOpen(!menuOpen);
                      }}
                    >
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div
          onClick={() => setMenuOpen(false)}
          className={menuOpen ? "body-overlay show" : "body-overlay"}
        ></div>
      </header>
    </React.Fragment>
  );
};

export default Header;
