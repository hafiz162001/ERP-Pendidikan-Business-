import React, { useEffect } from "react";
import HeroKampusMerdeka from "../../components/KampusMerdeka/HeroKampusMerdeka";
import Wrapper from "../../components/Layout/Wrapper";
import BrandSection from "../../components/Homepage/BrandSection";
import InfoSIB from "../../components/KampusMerdeka/InfoSIB";
import HowToJoin from "../../components/KampusMerdeka/HowToJoin";
import PortofolioSection from "../../components/KampusMerdeka/PortofolioSection";
import WebinarTampilSection from "../../components/KampusMerdeka/WebinarTampilSection";
import Youtube from "../../components/KampusMerdeka/Youtube";

const KampusMerdeka = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      <div>
        <HeroKampusMerdeka />
        <BrandSection />
        <InfoSIB />
        <Youtube />
        <HowToJoin />
        <PortofolioSection />
        {/* <WebinarTampilSection /> */}
      </div>
    </Wrapper>
  );
};

export default KampusMerdeka;
