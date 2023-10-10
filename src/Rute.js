import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import { UserInfoPage } from "./pages/UserInfoPage";
import PrivateRoute from "./auth/PrivateRoute";
import HomePage from "./pages/Homepage/HomePage";
import FreeCoursePage from "./pages/Course/FreeCourse/FreeCoursePage";
import ErrorPage from "./pages/Error/ErrorPage";
import CourseDetails from "./pages/Course/CourseDetails";
import MyFreeCoursePage from "./pages/MyCourse/MyFreeCoursePage";
import MyFreeCourseDetails from "./pages/MyCourse/MyFreeCourseDetails";
import MyFreeCourseSyllabus from "./pages/MyCourse/MyFreeCourseSyllabus";
import MyFreeCourseQuiz from "./pages/MyCourse/MyFreeCourseQuiz";
import Prakerja from "./pages/Prakerja/Prakerja";
import Colaboration from "./pages/Collaboration/Colaboration";
import TestAPI from "./pages/TestAPI";
import PrakerjaForm from "./pages/Prakerja/PrakerjaForm";
import TestAPISecond from "./pages/TestAPISecond";
import RegisterPage from "./pages/Register/RegisterPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import MasterClassPage from "./pages/Course/MasterClass/MasterClassPage";
import MasterClassOJTPage from "./pages/Course/MasterClassOJT/MasterClassOJTPage";
import CertificationDetails from "./pages/Certification/CertificationDetails";
import NationalCertification from "./pages/Certification/NationalCertification/NationalCertification";
import Portofolio from "./pages/Portofolio/Portofolio";
import PortofolioDetails from "./pages/Portofolio/PortofolioDetails";
import MyPortofolio from "./pages/MyPortofolio/MyPortofolio";
import MyPortofolioEditor from "./pages/MyPortofolio/MyPortofolioEditor";
import MySyllabusUploadTask from "./pages/MyCourse/MyMasterClassOJT/MySyllabusUploadTask";
import LearningPath from "./pages/LearningPath/LearningPath";
import LearningPathDetails from "./pages/LearningPath/LearningPathDetails";
import MyCertificationDetails from "./pages/MyCertification/MyCertificationDetails";
import CheckoutCertification from "./pages/Certification/CheckoutCertification";
import CheckoutLearningPath from "./pages/LearningPath/CheckoutLearningPath";
import InternationalCertification from "./pages/Certification/InternationalCertification/InternationalCertification";
import MyCertificationQuiz from "./pages/MyCertification/MyCertificationQuiz";
import KampusMerdeka from "./pages/KampusMerdeka/KampusMerdeka";
import MyPortofolioDetails from "./pages/MyPortofolio/MyPortofolioDetails";
import Testimonial from "./pages/Testimonial/Testimonial";
import MyPortofolioUpdate from "./components/MyPortofolio/MyPortofolioUpdate";
import MyLearningPathDetails from "./pages/MyLearningPath/MyLearningPathDetails";
import Contact from "./pages/Contact/Contact";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import {
  basePath,
  certificationdetails,
  coursedetails,
  learningpathdetails,
  portofoliodetails,
} from "./api/basePath";

export const Rute = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={basePath.homepage} element={<HomePage />} />
          <Route path={basePath.login} element={<LoginPage />} exact />
          <Route
            path={basePath.freecourse}
            element={<FreeCoursePage />}
            exact
          />
          <Route
            path={basePath.masterclass}
            element={<MasterClassPage />}
            exact
          />
          <Route
            path={basePath.masterclassojt}
            element={<MasterClassOJTPage />}
            exact
          />
          <Route
            path={basePath.nationalcertification}
            element={<NationalCertification />}
            exact
          />
          <Route
            path={basePath.internationalcertification}
            element={<InternationalCertification />}
            exact
          />
          <Route path={basePath.prakerja} element={<Prakerja />} exact />
          <Route
            path={basePath.prakerjaform}
            element={<PrakerjaForm />}
            exact
          />
          <Route
            path={basePath.colaboration}
            element={<Colaboration />}
            exact
          />
          <Route path="/testapi" element={<TestAPI />} exact />
          <Route path="/testapi2" element={<TestAPISecond />} exact />
          <Route path={basePath.register} element={<RegisterPage />} exact />
          <Route
            path={coursedetails(":id", false)}
            element={<CourseDetails />}
            exact
          />

          <Route path={basePath.portofolio} element={<Portofolio />} exact />
          <Route
            path={portofoliodetails(":id", false)}
            element={<PortofolioDetails />}
            exact
          />

          <Route
            path={basePath.learningpath}
            element={<LearningPath />}
            exact
          />
          <Route
            path={learningpathdetails(":id", false)}
            element={<LearningPathDetails />}
            exact
          />

          <Route
            path={basePath.kampusmerdeka}
            element={<KampusMerdeka />}
            exact
          />
          <Route path={basePath.testimonial} element={<Testimonial />} exact />

          <Route path="/contact" element={<Contact />} exact />
          <Route
            path={basePath.resetpassword}
            element={<ResetPassword />}
            exact
          />

          <Route
            path={certificationdetails()}
            element={<CertificationDetails />}
            exact
          />
          <Route element={<PrivateRoute />}>
            {/* <Route exact path='/' element={<UserInfoPage/>}/> */}
            {/* <Route path="/myfreecourse" element={<MyFreeCoursePage/>}/> */}
            <Route
              path={basePath.mycertificationdetails}
              element={<MyCertificationDetails />}
              exact
            />
            <Route
              path={basePath.mycoursedetails}
              element={<MyFreeCourseDetails />}
              exact
            />
            <Route
              path={basePath.mycoursesyllabus}
              element={<MyFreeCourseSyllabus />}
              exact
            />
            <Route
              path={basePath.mycoursequiz}
              element={<MyFreeCourseQuiz />}
              exact
            />
            <Route path={basePath.checkout} element={<CheckoutPage />} exact />
            <Route
              path={basePath.mylearning}
              element={<MyFreeCoursePage />}
              exact
            />
            <Route path={basePath.profile} element={<ProfilePage />} exact />
            <Route
              path={basePath.myportofolio}
              element={<MyPortofolio />}
              exact
            />
            <Route
              path={basePath.myportofolioeditor}
              element={<MyPortofolioEditor />}
              exact
            />
            <Route
              path={basePath.mysyllabusuploadtask}
              element={<MySyllabusUploadTask />}
              exact
            />

            <Route
              path={basePath.checkoutcertification}
              element={<CheckoutCertification />}
              exact
            />
            <Route
              path={basePath.checkoutlearningpath}
              element={<CheckoutLearningPath />}
              exact
            />
            <Route
              path={basePath.myportofoliodetails}
              element={<MyPortofolioDetails />}
              exact
            />
            <Route
              path={basePath.myportofolioupdate}
              element={<MyPortofolioUpdate />}
              exact
            />
            <Route
              path={basePath.mylearningpathdetails}
              element={<MyLearningPathDetails />}
              exact
            />

            <Route
              path={basePath.certificationdetails}
              element={<MyCertificationQuiz />}
              exact
            />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
};
