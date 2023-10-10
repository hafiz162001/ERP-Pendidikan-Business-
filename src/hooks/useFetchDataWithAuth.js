import { useEffect, useState } from "react";
import axios from "axios";
import { useToken } from "../auth/useToken";
import { baseUrl } from "../api/baseUrl";
import refreshPage from "../utils/refreshPage";
import { Navigate, useNavigate } from "react-router-dom";
import { basePath } from "../api/basePath";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6IjMjMSIsImlhdCI6MTYxMjc5NDU4NywibmJmIjoxNjEyNzk0NTg3LCJleHAiOjE2MTUzODY1ODd9.cXBbhVfUzFhJGdBMbv57YfGoWhZMU2Pvygv6CdZZu1s";

const useFetchDataWithAuth = (url, refresh = true) => {
  // const defaultUrl = "https://portal2.bisaai.id:8080/bisa_business_dev/";
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [token] = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const { data: response } = await axios.get(
          baseUrl.baseUrl + "/" + url,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `JWT ${token}`,
            },
          }
        );
        // console.log(token);
        // console.log(response);
        setData(response);
        setLoading(false);
      } catch (error) {
        if (error.response.data.status_code === 401) {
          if (refresh === true) {
            localStorage.removeItem(token);
            // refreshPage();
            navigate(basePath.login);
          }
        }
        console.error(error);
      }
    };

    fetchData(url);
  }, [url]);

  return {
    data,
    loading,
  };
};

export default useFetchDataWithAuth;
