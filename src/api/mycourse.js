import axios from "axios";
import { useQuery } from "react-query";
import { baseUrl } from "./baseUrl";
import {
  baseHeader,
  BaseHeaderWithAuth,
  baseHeaderWithAuth,
} from "./baseHeader";
import { useToken } from "../auth/useToken";
import { useNavigate } from "react-router-dom";

const useFetchMyFreeCourses = ({ rating, search, status, page }) => {
  return useQuery(
    ["myfreecourses", { rating, search, status, page }],
    async () => {
      const { data } = await axios.get(
        baseUrl.baseUrl +
          `/academy/get_customer_testimoni_and_rating_landing?rating=${rating}&search=${search}&order_by=${status}&page=${page}`,
        baseHeaderWithAuth
      );
      return data;
    }
  );
};

// keep dulu

// const useFetchMyFreeCourse = (id) => {
//   const [token] = useToken("");
//   const query = useQuery(["myfreecoursey", { id, token }], async () => {
//     const { data } = await customAxios.get(
//       `/academy/get_customer_course?id_course=${id}`,
//       baseHeaderWithAuth
//     );
//     console.log(data);
//     return data;
//   });

//   console.log(query.error);
//   console.log(query.data);
//   return query;
// };

const useFetchMyFreeCourse = (id) => {
  const [token] = useToken();
  console.log(token);
  const query = useQuery(["myfreecoursey", { id, token }], async () => {
    const { data } = await axios.get(
      baseUrl.baseUrl + `/academy/get_customer_course?id_course=${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${token}`,
        },
      }
    );
    // console.log(data);
    return data;
  });

  // console.log(query.error);
  // console.log(query.data);
  return query;
};

const useFetchMyCourseDiscussion = ({ id }) => {
  return useQuery(["myfreecoursediscussion", { id }], async () => {
    const { data } = await axios.get(
      baseUrl.baseUrl + `/course/get_discuss?id_course=${id}&is_aktif=1`,
      baseHeader
    );
    return data;
  });
};

export { useFetchMyFreeCourse, useFetchMyCourseDiscussion };
