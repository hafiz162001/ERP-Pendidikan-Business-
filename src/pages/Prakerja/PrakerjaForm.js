import React, { useState } from "react";
import PrakerjaFormDetails from "../../components/Prakerja/PrakerjaFormDetails";
import Wrapper from "../../components/Layout/Wrapper";

function PrakerjaForm() {
  return (
    <Wrapper>
      <div className="mt-120"></div>
      <PrakerjaFormDetails />
      <div className="mb-100"></div>
    </Wrapper>
  );
}

export default PrakerjaForm;
