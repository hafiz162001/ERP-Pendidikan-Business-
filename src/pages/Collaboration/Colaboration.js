import React, { useEffect } from "react";
import BrandColaboration from "../../components/Colaboration/BrandColaboration";
import HeroColaboration from "../../components/Colaboration/HeroColaboration";
import JoinColaboration from "../../components/Colaboration/JoinColaboration";
import Wrapper from "../../components/Layout/Wrapper";
import BrandSection from "../../components/Homepage/BrandSection";

function Colaboration() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      <HeroColaboration />
      <JoinColaboration />
      <BrandSection />
      {/* <BrandColaboration/> */}
    </Wrapper>
  );
}

export default Colaboration;
