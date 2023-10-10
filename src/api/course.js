import axios from "axios";
import { useQuery } from "react-query";
import { baseHeader } from "./baseHeader";
import { baseUrl } from "./baseUrl";
import toast from "react-hot-toast";

const useFetchFreeCourses = ({ searchQuery, filtering, filterLevel, page }) => {
  return useQuery(
    ["freecourses", { searchQuery, filtering, filterLevel, page }],
    async () => {
      const { data } = await axios.get(
        baseUrl.baseUrl +
          `/course/get_course?is_aktif=1&q=${searchQuery}&tingkat=${filterLevel}&order_by_number_of_student=${filtering}&is_free=1&page=${page}`,
        baseHeader
      );
      return data;
    }
  );
};

const useFetchFreeCourse = (id) => {
  return useQuery(["freecourse", { id }], async () => {
    const { data } = await axios.get(
      baseUrl.baseUrl + `/course/get_course?id=${id}`,
      baseHeader
    );
    return data;
  });
};

const useFetchSyllabus = (id) => {
  return useQuery(["syllabus", { id }], async () => {
    const { data } = await axios.get(
      baseUrl.baseUrl + `/course/get_syllabus?id_c=${id}&is_list=2`,
      baseHeader
    );
    return data;
  });
};

export { useFetchFreeCourses, useFetchFreeCourse, useFetchSyllabus };
