import React from "react";
import Wrapper from "../../components/Layout/Wrapper";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <Wrapper>
      <div className="bg-light pt-120">
        <ContactInfo />
        <div className="container"></div>
      </div>
    </Wrapper>
  );
};

export default Contact;
