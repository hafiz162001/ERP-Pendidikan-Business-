import axios from "axios";
import { useQuery } from "react-query";
import { baseUrl } from "./baseUrl";
import { baseHeader } from "./baseHeader";
import { useNavigate } from "react-router-dom";
import { useToken } from "../auth/useToken";

const useFetchPortofolios = ({ search, category, course, status, page }) => {
  const result = useQuery(
    ["portofolios", { search, category, course, status, page }],
    async () => {
      const { data } = await axios.get(
        baseUrl.baseUrl +
          `/portofolio/get_portofolio_landing?mode=2&order_by=${status}&page=${page}&id_kategori_portofolio=${category}&id_course=${course}&search=${search}`,
        baseHeader
      );
      return data;
    }
  );

  return result;
};

const useFetchPortofolio = ({ id }) => {
  const result = useQuery(["portofolio", { id }], async () => {
    const { data } = await axios.get(
      baseUrl.baseUrl +
        `/portofolio/get_portofolio_landing?id_portofolio=${id}`,
      baseHeader
    );
    return data;
  });

  return result;
};

const useFetchPortofolioCourse = () => {
  const result = useQuery(["portofoliocourse"], async () => {
    const { data } = await axios.get(
      baseUrl.baseUrl +
        `/portofolio/get_list_course_for_filtering_landing_portofolio`,
      baseHeader
    );
    return data;
  });

  return result;
};

const useFetchPortofolioCategory = () => {
  const result = useQuery(["portofoliocategory"], async () => {
    const { data } = await axios.get(
      baseUrl.baseUrl + `/portofolio/get_kategori_portofolio`,
      baseHeader
    );
    return data;
  });

  return result;
};

const useFetchPortofolioRecommendation = ({ id }) => {
  const [token] = useToken();
  const query = useQuery(
    ["portofoliorecommendation", { id, token }],
    async () => {
      const { data } = await axios.get(
        baseUrl.baseUrl +
          `/portofolio/get_customer_portofolio_recommendation?rec_id=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${token}`,
          },
        }
      );
      return data;
    }
  );
  return query;
};

export {
  useFetchPortofolios,
  useFetchPortofolio,
  useFetchPortofolioCourse,
  useFetchPortofolioCategory,
  useFetchPortofolioRecommendation,
};
