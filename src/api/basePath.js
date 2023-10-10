import { base64UrlEncode } from "../utils/base64UrlConverter";

const coursedetails = (id = ":id", encode = true) => {
  if (encode) {
    id = base64UrlEncode(id);
  }
  return `/course/detail/${id}/1`;
};

const certificationdetails = (id = ":id") => {
  return `/certification/detail/${id}`;
};

const learningpathdetails = (id = ":id", encode = true) => {
  if (encode) {
    id = base64UrlEncode(id);
  }
  return `/learningpath/detail/${id}`;
};
const portofoliodetails = (id = ":id", encode = true) => {
  if (encode) {
    id = base64UrlEncode(id);
  }
  return `/portofolio/detail/${id}`;
};

const basePath = {
  // public route
  homepage: "/",
  login: "/login",
  freecourse: "/freecourse",
  masterclass: "/masterclass",
  masterclassojt: "/masterclassojt",
  nationalcertification: "/nationalcertification",
  internationalcertification: "/internationalcertification",
  prakerja: "/prakerja",
  prakerjaform: "/prakerjaform",
  colaboration: "/colaboration",
  register: "/signup",
  portofolio: "/portofolio",
  // portofoliodetails: "/portofoliodetails/:id",
  learningpath: "/learningpath",
  // learningpathdetails: "/learningpathdetails/:id",
  kampusmerdeka: "/kampusmerdeka",
  testimonial: "/testimonial",
  resetpassword: "/lupa_password",
  // certificationdetails: "/certificationdetails/:id",
  // private route
  mycertificationdetails: "/mycertificationdetails/:id",
  mycoursedetails: "/myfreecoursedetails/:id",
  mycoursesyllabus: "/myfreecoursesyllabus/:id",
  mycoursequiz: "/myfreecoursequiz/:id",
  checkout: "/checkout/:id",
  mylearning: "/myfreecourse",
  profile: "/profile",
  myportofolio: "/myportofolio",
  myportofolioeditor: "/myportofolio/add",
  mysyllabusuploadtask: "/mysyllabusuploadtask",
  checkoutcertification: "/checkoutcertification/:id",
  checkoutlearningpath: "/checkoutlearningpath/:id",
  myportofoliodetails: "/myportofoliodetails/:id",
  myportofolioupdate: "/myportofolioupdate/:id",
  mylearningpathdetails: "/mylearningpathdetails/:id",
  mycertificationquiz: "/mycertificationquiz/:id",
};

export {
  basePath,
  coursedetails,
  certificationdetails,
  learningpathdetails,
  portofoliodetails,
};
