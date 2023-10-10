import React, { useState } from "react";
import { useToken } from "../auth/useToken";
import { baseUrl } from "../api/baseUrl";
import MyPortofolioEditorQuill from "../components/MyPortofolio/MyPortofolioEditorQuill";

function TestAPI() {
  const [editorData, setEditorData] = useState();
  const [token, setToken] = useToken();

  var axios = require("axios");

  var config = {
    method: "get",
    url: baseUrl.baseUrl + "/users/get_profile",
    headers: {
      "Content-Type": "application/json",
      Authorization: "JWT " + token,
    },
  };

  axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  const lihatData = () => {
    // console.log(editorData);
  };

  return (
    <div className="container mt-20">
      Token dari LOCAL STORAGE : <b>{token}</b>
      <div> Tipe : Get, mengirimkan JWTtoken ke server </div>
      <MyPortofolioEditorQuill value={editorData} setValue={setEditorData} />
      <button onClick={lihatData}>Lihat</button>
    </div>
  );
}

export default TestAPI;
