import axios from "axios";
import { useQuery } from "react-query";
import { baseUrl } from "./baseUrl";
import { baseHeader } from "./baseHeader";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useFetchTestimonials = ({ rating, search, status, page }) => {
  const navigate = useNavigate();
  const result = useQuery(
    ["testimonials", { rating, search, status, page }],
    async () => {
      const { data } = await axios.get(
        baseUrl.baseUrl +
          `/academy/get_customer_testimoni_and_rating_landing?rating=${rating}&search=${search}&order_by=${status}&page=${page}`,
        baseHeader
      );
      return data;
    }
  );

  // React.useEffect(() => {
  //   if (result.isError) {
  //     navigate("/login");
  //   }
  // }, [result.isError]);

  // 🚨 effects are executed for every component
  // that uses this custom hook individually
  // React.useEffect(() => {
  //   if (result.isLoading) {
  //     toast.error(`Something went wrong: ${result.error.message}`);
  //   }
  // }, [result.isLoading]);

  return result;
};

export { useFetchTestimonials };
