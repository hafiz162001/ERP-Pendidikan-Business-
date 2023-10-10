import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb2(props) {
  const { content } = props;
  return (
    <section className="certification__header--background page__title-area page__title-height d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="page__title-wrapper mt-80 text-center">
              <h1 className="heading">{!content ? "Error" : content.title}</h1>
              <p className="fs-5 lh-base">
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

export default Breadcrumb2;
