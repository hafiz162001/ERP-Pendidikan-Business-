import React from "react";
import { Typography, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function CheckoutSuccess() {
  const navigate = useNavigate();
  const returnBack = () => {
    navigate("/colaboration");
  };
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Data sudah dikirim.
      </Typography>
      <Typography variant="subtitle1">
        Terimakasih telah mengisi form ini
      </Typography>
      <button onClick={returnBack} className="btn btn-altdanger">
        Kembali
      </button>
    </React.Fragment>
  );
}

export default CheckoutSuccess;
