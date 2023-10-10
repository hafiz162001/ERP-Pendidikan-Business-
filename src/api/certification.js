import axios from "axios";
import { useQuery } from "react-query";
import { useToken } from "../auth/useToken";
import { baseHeader } from "./baseHeader";
import { baseUrl } from "./baseUrl";

const useFetchCertifications = ({ searchQuery, filtering, page }) => {
  return useQuery(
    ["certifications", { searchQuery, filtering, page }],
    async () => {
      const { data } = await axios.get(
        baseUrl.baseUrl +
          `/certification/get_certification?is_aktif=1&tipe=1&search=${searchQuery}&page=${page}&order_by=${filtering}`,
        baseHeader
      );
      return data;
    }
  );
};

const useFetchCertification = (id) => {
  return useQuery(["certification", { id }], async () => {
    const { data } = await axios.get(
      baseUrl.baseUrl +
        `/certification/get_certification?is_aktif=1&id_certification=${id}`,
      baseHeader
    );
    return data;
  });
};

const useFetchCertificationReqCourse = (id) => {
  return useQuery(["certificationreqcourse", { id }], async () => {
    const { data } = await axios.get(
      baseUrl.baseUrl +
        `/certification/get_cert_req_course?id_certification=${id}`,
      baseHeader
    );
    return data;
  });
};

const useFetchMyCertification = (id) => {
  const [token] = useToken();
  console.log(token);
  const query = useQuery(["mycertification", { id, token }], async () => {
    const { data } = await axios.get(
      baseUrl.baseUrl +
        `/certification/check_my_req_course?is_aktif=1&id_certification=${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${token}`,
        },
      }
    );
    return data;
  });
  console.log(query.error);
  return query;
};

export {
  useFetchCertifications,
  useFetchCertification,
  useFetchCertificationReqCourse,
  useFetchMyCertification,
};
