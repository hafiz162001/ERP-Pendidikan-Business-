import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Loading from "../SideComponents/Loading/Loading";

function Service() {
  const listServices = [
    {
      iconName: <FontAwesomeIcon icon="fa-solid fa-rocket" />,
      title: "F&B Startup",
      description:
        "Belajar membangun F&B Startup dari idea, implementasi hingga akselerasi",
    },
    {
      iconName: <FontAwesomeIcon icon="fa-solid fa-store" />,
      title: "F&B Branding & Packaging",
      description:
        "Belajar mempromosikan F&B Branding melalui channel media sosial, e-wom dan teknik marketing lainnya serta membuat packaging yang menarik pada F&B",
    },
    {
      iconName: <FontAwesomeIcon icon="fa-solid fa-coins" />,
      title: "Bakery & Pastry",
      description:
        "Belajar mengelola bisnis Bakery & Pastry serta membuat produk bidang Bakery & Pastry",
    },
    {
      iconName: <FontAwesomeIcon icon="fa-regular fa-comments" />,
      title: "Sales",
      description:
        "Belajar mengelola penjualan produk F&B melalui teknik didalam Sales",
    },
    {
      iconName: <FontAwesomeIcon icon="fa-solid fa-dice-three" />,
      title: "Coffee & Beverages",
      description:
        "Belajar mengelola bisnis Coffee & Beverages serta membuat produk bidang Coffee & Beverages",
    },
    {
      iconName: <FontAwesomeIcon icon="fa-regular fa-hourglass" />,
      title: "Commercial Cookery",
      description:
        "Belajar mengelola bisnis Commercial Cookery serta membuat produk bidang Commercial Cookery",
    },
  ];
  return (
    <section className="services__area pt-50 pb-40 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3">
            <div className="section__title-wrapper section-padding mb-60 text-center">
              <h2 className="heading">Berbagai Bidang Pembelajaran</h2>
              <p>
                {" "}
                Kamu bisa belajar salah satu bidang atau <b>semuanya</b>.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {listServices.map((service) => {
            return (
              <div
                className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6"
                key={service.title}
              >
                <div className="services__item bg-cream-bb mb-30">
                  <div className="services__icon">{service.iconName}</div>
                  <div className="services__content">
                    <h2 className="services__title">
                      <Link to="/">{service.title}</Link>
                    </h2>
                    <p className="services__content">{service.description}</p>
                    {/* <Link to="/about"><p className="link-btn-2">
                                <i><FontAwesomeIcon icon={['fas', 'arrow-right']} /></i>
                                <i><FontAwesomeIcon icon={['fas', 'arrow-right']} /></i>
                            </p></Link> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Service;
