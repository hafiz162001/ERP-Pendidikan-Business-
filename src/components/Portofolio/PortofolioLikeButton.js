import React, { useState } from "react";
import { useToken } from "../../auth/useToken";
import axios from "axios";
import { baseUrl } from "../../api/baseUrl";
import useFetchDataWithAuth from "../../hooks/useFetchDataWithAuth";
import Loading from "../SideComponents/Loading/Loading";
import refreshPage from "../../utils/refreshPage";
import { useUser } from "../../auth/useUser";
import { Link } from "react-router-dom";

const PortofolioLikeButton = ({ id, isLiked }) => {
  // true => like
  // false => dislike
  // const [action, setAction] = useState(1);
  const [token] = useToken("");
  const { data: likePortofolio, loading: loadingLikePortofolio } =
    useFetchDataWithAuth(
      "portofolio/cek_is_like_portofolio?id_portofolio=" + id
    );
  if (loadingLikePortofolio) return <Loading />;

  let action;
  if (likePortofolio.data?.is_like === 0) {
    action = 1;
  } else {
    action = 2;
  }

  const handleLike = async () => {
    const payload = {
      id_portofolio: id,
      action: action,
    };
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `JWT ${token}`,
      };
      const response = await axios.put(
        baseUrl.baseUrl + "/portofolio/like_unlike_portofolio",
        payload,
        {
          headers: headers,
        }
      );
      if (response.data.status_code === 200) {
        refreshPage();
      }
      // alert(JSON.stringify(response.data.description));
    } catch (e) {
      alert(JSON.stringify(e.response.data?.description));

      // alert(JSON.stringify(e.response));
      // console.log(e);
    } finally {
      // setSubmitting(false);
    }
  };
  return (
    <>
      {likePortofolio.data?.is_like === 0 ? (
        <button onClick={handleLike} class="btn btn-altdanger" type="button">
          Suka
        </button>
      ) : (
        <button onClick={handleLike} class="btn btn-secondary" type="button">
          Tidak Suka
        </button>
      )}
    </>
  );
};

export default PortofolioLikeButton;
