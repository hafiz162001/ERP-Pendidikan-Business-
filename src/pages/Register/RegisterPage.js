import React, { useEffect } from "react";
import Wrapper from "../../components/Layout/Wrapper";
import { Register } from "../../components/Sign/Register";
import registerImg from "../../assets/img/register.png";

function RegisterPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      <div className="bg-light vh-100">
        <section className="signup__area po-rel-z1 pt-100 pb-145">
          <div className="container mt-3">
            <div className="row">
              <div className="col-md-4 mr-50">
                <Register />
              </div>
              <div className="col-md-7 d-sm-none d-none d-md-block my-auto text-center">
                <img
                  className="img-fluid"
                  style={{ maxWidth: "85%" }}
                  src={registerImg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Wrapper>
  );
}

export default RegisterPage;
