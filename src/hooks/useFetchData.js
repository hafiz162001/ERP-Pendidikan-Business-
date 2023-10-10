import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../api/baseUrl";

const useFetchData = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const { data: response } = await axios.get(
          baseUrl.baseUrl + "/" + url,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        // console.log(response);
        setData(response);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData(url);
  }, [url]);

  return {
    data,
    loading,
  };
};

export default useFetchData;
