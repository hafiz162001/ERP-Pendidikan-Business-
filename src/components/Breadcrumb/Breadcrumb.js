import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb(props) {
  const { content } = props;
  return (
    <section
      className="bg-light page__title-area page__title-height d-flex align-items-center"
      style={{
        backgroundImage: `url(${"assets/img/page-title/page-title.png"})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="page__title-wrapper mt-20 text-center">
              <h1 className="heading">{!content ? "Error" : content.title}</h1>
              <p className="fs-6 lh-base">
                {!content ? "Error" : content.desc}
              </p>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  {/* <li className="breadcrumb-item"><Link href="/" as="/"><a>Home</a></Link></li> */}
                  {/* <li className="breadcrumb-item active" aria-current="page">{ pageTitle ? pageTitle : 'Courses'}</li> */}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Breadcrumb;
