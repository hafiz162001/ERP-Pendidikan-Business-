import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Header2 from "./Header2";

function Wrapper({ children, color = "light" }) {
  return (
    <>
      <Header2 />
      {children}
      <Footer color={color} />
    </>
  );
}

export default Wrapper;
