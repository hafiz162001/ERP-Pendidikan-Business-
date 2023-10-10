import React, { useEffect } from "react";
import BrandSection from "../../components/Homepage/BrandSection";
import Wrapper from "../../components/Layout/Wrapper";
import FAQ from "../../components/Prakerja/FAQ";
import HeroPrakerja from "../../components/Prakerja/HeroPrakerja";
import PrakerjaCourse from "../../components/Prakerja/PrakerjaCourse";

function Prakerja() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      <HeroPrakerja />
      <BrandSection />
      <PrakerjaCourse />
      <FAQ />
    </Wrapper>
    // <div className='container'>
    // {/* <div className="card bg-soft-blue mt-100">
    // <div className="card-body p-md-10 py-xxl-16 position-relative">
    //     <div className="position-absolute d-none d-lg-block" style={{'bottom':'0', 'left':'10%', 'width': '28%', 'z-index':'2'}}>
    //         <figure><img src="/assets/img/homepage/co2.png" srcset="src/img/photos/co2@2x.png 2x" alt=""/></figure>
    //     </div>
    //     <div classNameName="col-xxl-12">
    //         <div classNameName="col-6 d-inline">
    //             <a>udhfjhfjkhdfsjkh</a>
    //         </div>
    //         <div classNameName="col-6 ">
    //             <a className='d-inline'>“Fusce dapibus tellus ac cursus commodo, tortor mauris condimentum nibh ut fermentum massa, justo sit amet vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed”</a>
    //         </div>
    //         </div>
    //     </div>
    // </div> */}
    // </div>
  );
}

export default Prakerja;
