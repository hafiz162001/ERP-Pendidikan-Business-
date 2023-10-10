// https://gate.bisaai.id/bisa_business_prod
// https://portal2.bisaai.id:8080/bisa_business_dev
// https://gate.bisaai.id/bisa_design_prod
// https://portal2.bisaai.id:8080/elearning2_dev/

export const baseUrl = {
  baseUrl: "https://gate.bisaai.id/bisa_business_prod",
};

export const photoUrl = {
  coursePhoto: baseUrl.baseUrl + "/course/media/",
  certificationPhoto:
    baseUrl.baseUrl + "/certification/media/foto_certification/",
  certificationCoursePhoto: baseUrl.baseUrl + "/course/media/",
  certificationPartnerPhoto:
    baseUrl.baseUrl + "/certification/media/foto_partner/",
  learningPathPhoto: baseUrl.baseUrl + "/learning_path/media/",
  certificatePhoto: baseUrl.baseUrl + "/master_sertifikat/media/course/",
  profilePhoto: baseUrl.baseUrl + "/users/media/",
  carousellPortofolioPhoto:
    baseUrl.baseUrl + "/portofolio/media/carousel_portofolio/",
  thumbnailPortofolioPhoto:
    baseUrl.baseUrl + "/portofolio/media/foto_portofolio/",
  transactionPhoto: baseUrl.baseUrl + "/transaction/media/",
  discussionPhoto: baseUrl.baseUrl,
};

export const videoUrl = {
  videoIntroHomepage: "https://www.youtube.com/embed/PTiGrlOfdbI",
};

export const fileUrl = {
  taskFinalCourse: baseUrl.baseUrl + "/academy/media/task/",
};

export const paymentUrl = {
  courseWithCouponOrFree: baseUrl.baseUrl + "/academy/insert_customer_course",
  courseWithPaid: baseUrl.baseUrl + "/academy/insert_customer_course_paid",
  certification:
    baseUrl.baseUrl + "/certification/insert_customer_certification",
  learningPath:
    baseUrl.baseUrl + "/customer_learning_path/insert_customer_learning_path",
};

export const additionalUrl = {
  handbook: "https://bisa.ai/s/katalog_bisa",
  playStore:
    "https://play.google.com/store/apps/details?id=business.bisa.bisa_business",
  cp_email: "mailto:info@bisa.ai",
  cp_whatsapp: "https://api.whatsapp.com/send?phone=+6282116654087",
  instagram: "https://www.instagram.com/bisa.business/",
  linkedin: "https://www.linkedin.com/company/bisa-ai/",
  youtube: "https://www.youtube.com/channel/UCGOi_aO_pEkDYs8uSJduP6w",
  telegram: "https://t.me/bisa_ai",
  medium: "https://medium.com/bisa-ai",
};
