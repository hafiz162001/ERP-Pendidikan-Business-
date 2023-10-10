import React, { useEffect } from "react";
import { useUser } from "../../auth/useUser";
import About from "../../components/Homepage/About";
import BrandSection from "../../components/Homepage/BrandSection";
import ContinueStudy from "../../components/Homepage/ContinueStudy/ContinueStudy";
import Counter from "../../components/Homepage/Counter";
import Hero from "../../components/Homepage/Hero";
import RecommendationCertification from "../../components/Homepage/Recommendation/RecommendationCertification";
import RecommendationCourse from "../../components/Homepage/Recommendation/RecommendationCourse";
import RecommendationPrakerja from "../../components/Homepage/Recommendation/RecommendationPrakerja";
import Service from "../../components/Homepage/Service";
import SyllabusHandbook from "../../components/Homepage/SyllabusHandbook";
import Testimonial from "../../components/Homepage/Testimonial";
import VideoIntro from "../../components/Homepage/VideoIntro";
import WhyUs from "../../components/Homepage/WhyUs";
import Wrapper from "../../components/Layout/Wrapper";

function HomePage() {
  const user = useUser();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Wrapper color="yellow">
        <Hero />
        {user ? <ContinueStudy /> : ""}
        <Service />
        <RecommendationPrakerja />
        <RecommendationCourse />
        <RecommendationCertification />
        <BrandSection />
        <SyllabusHandbook />
        <Counter />
        {/* <WhyUs /> */}
        {/* <Testimonial /> */}
        {/* <VideoIntro /> */}
        {/* <About/> */}
      </Wrapper>
    </>
  );
}

export default HomePage;
