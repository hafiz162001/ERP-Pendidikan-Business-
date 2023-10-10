import React from "react";
import EditProfile from "../../components/Profile/EditProfile";
import ProfileDescription from "../../components/Profile/ProfileDescription";
import UpdatePassword from "../../components/Profile/UpdatePassword";
import Wrapper from "../../components/Layout/Wrapper";

function ProfilePage() {
  return (
    <Wrapper>
      <div className="bg-light">
        <div class="header bg-cream-bb pt-120 pb-60">
          <div className="container">
            {" "}
            <h2 className="fw-bold">Profil Saya</h2>{" "}
          </div>
        </div>
        <div className="mt-n5">
          <div className="container">
            <div className="card border-0 shadow-sm rounded-3 pt-10 pb-10">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 border-end">
                  <div className="profile__card ml-10">
                    <div className="card-body">
                      <div className="account-settings">
                        <ProfileDescription />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                  <div className="">
                    <div className="card-body border-bottom">
                      <h4 className="card-title mb-4 fw-bold">
                        Informasi Akun
                      </h4>
                      <EditProfile />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title mb-4 fw-bold">
                        Informasi Password
                      </h4>
                      <UpdatePassword />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='container-fluid mt-120'>
        <div className="card mb-4">
            <div className="card-header">
                <h3 className="mb-0">Form group in grid</h3>
            </div>  
            <div className="card-body">
                <div className='row'>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label className="form-control-label" for="example3cols1Input">One of three cols</label>
                            <input type="text" className="form-control" id="example3cols1Input" placeholder="One of three cols"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    </Wrapper>
  );
}

export default ProfilePage;
