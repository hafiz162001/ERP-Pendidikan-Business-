import React from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import useFetchDataWithAuth from "../../hooks/useFetchDataWithAuth";
import Wrapper from "../Layout/Wrapper";
import Loading from "../SideComponents/Loading/Loading";
import MyPortofolioEditorFormUpdate from "./MyPortofolioEditorFormUpdate";

const MyPortofolioUpdate = () => {
  const { id } = useParams();
  const { data: dataPortofolio, loading: loadingPortofolio } =
    useFetchDataWithAuth(
      "portofolio/get_customer_portofolio?id_portofolio=" + id
    );
  if (loadingPortofolio) return <Loading />;

  return (
    <Wrapper>
      <MyPortofolioEditorFormUpdate dummyData={dataPortofolio.data[0]} />
    </Wrapper>
  );
};

export default MyPortofolioUpdate;
