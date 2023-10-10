import React, { useEffect } from "react";
import { photoUrl } from "../../api/baseUrl";
import Wrapper from "../../components/Layout/Wrapper";
import PortofolioDetailsSidebar from "../../components/Portofolio/PortofolioDetailsSidebar";
import PortofolioDetailsSidebarSlideshow from "../../components/Portofolio/PortofolioDetailsSidebarSlideshow";
import useFetchData from "../../hooks/useFetchData";
import { useParams, Link } from "react-router-dom";
import Loading from "../../components/SideComponents/Loading/Loading";
import { useFetchPortofolio } from "../../api/portofolio";
import { base64UrlDecode } from "../../utils/base64UrlConverter";

const dummyData = {
  nama_kategori_portofolio: "Design Graphic",
  nama_course: "Basic Adobe Photoshop CC",
  jumlah_like: 7,
  sosmed_instagram: "https://www.instagram.com/bisa.ai/",
  sosmed_linkedin: "https://www.linkedin.com/company/bisa-ai/",
  foto_user:
    "https://www.kaorinusantara.or.id/wp-content/uploads/2022/03/spyxfamily-trailer.jpg",
  nama_portofolio: "Redesign Tampi.id",
  nama_user: "Victor",
  foto_portofolio:
    "https://gate.bisaai.id/bisa_design_prod/portofolio/media/foto_portofolio/2022-06-06_125005_55055_foto_portofolio.png",
  deskripsi_lengkap:
    "Laporan arus kas (Cash Flow) merupakan informasi perubahan historis atas kas dan setara kas entitas, yang menunjukkan secara terpisah perubahan yang terjadi selama satu periode dari aktivitas operasi, investasi, dan pendanaan.Nah dalam merintis sebuah startup ataupun suatu usaha yang masih baru cash flow ini sangat membantu karena kita dapat men track kas yang keluar itu digunakan untuk apa dan kas yang kita dapatkan itu darimana datangnya.",
  deskripsi_singkat:
    "Cash Flow merupakan salah satu laporankeuangan yang sangat berguna bagi semua jenis usaha termasuk startup karena dengan adanya cash flow keluar dan masuknya kas dapat terpantau dan dapat diatur sesuai dengan kebutuhan.",
  carousel1: "2022-05-10_084152_72969_carousel_portofolio_1.png",
  carousel2: "2022-05-10_084152_39466_carousel_portofolio_2.png",
  carousel3: "2022-05-10_084152_68958_carousel_portofolio_3.png",
};

const PortofolioDetails = () => {
  let { id } = useParams();
  id = base64UrlDecode(id);
  // const { data: dataPortofolio, loading: loadingPortofolio } = useFetchData(
  //   "portofolio/get_portofolio_landing?id_portofolio=" + id
  // );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    isLoading: loadingPortofolio,
    isError,
    data: dataPortofolio,
    error,
    refetch,
  } = useFetchPortofolio({ id });

  if (loadingPortofolio) return <Loading />;
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const dummyData = dataPortofolio?.data[0];
  return (
    <Wrapper>
      <div className="certification_details__header--background">
        <div className="container pt-100">
          <Link to="/portofolio">
            <button className="btn btn-altdanger ml-10">Kembali</button>
          </Link>
          <div className="row align-items-center card-body">
            <div className="col-2 mr-3">
              <img
                src={photoUrl.profilePhoto + dummyData.foto_user}
                className="img-fluid img-thumbnail"
                alt="img not found"
              />
            </div>
            <div className="col-auto">
              <h4 className="fw-bold">{dummyData.nama_portofolio}</h4>
              <p>{dummyData.nama_user}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light pt-20">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="card-body border-1 rounded-3 mb-20">
                <PortofolioDetailsSidebarSlideshow
                  carousel1={dummyData.carousel1}
                  carousel2={dummyData.carousel2}
                  carousel3={dummyData.carousel3}
                />
              </div>
              <div className="card-body bg-white border-0 shadow-sm rounded-3 mb-20">
                <h5 className="fw-bold">Summary</h5>
                <div
                  className="portofolio"
                  dangerouslySetInnerHTML={{
                    __html: dummyData.deskripsi_singkat,
                  }}
                />
              </div>
              <div
                className="card card-body bg-white border-0 shadow-sm rounded-3 mb-20"
                style={{ width: "100%" }}
              >
                <h5 className="fw-bold">Description</h5>
                <div
                  className="portofolio"
                  dangerouslySetInnerHTML={{
                    __html: dummyData.deskripsi_lengkap,
                  }}
                />
              </div>
            </div>
            <div className="col-4">
              <PortofolioDetailsSidebar dummyData={dummyData} />
            </div>
          </div>
          <div className="row">
            <div></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PortofolioDetails;
