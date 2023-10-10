import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb3 from "../../components/Breadcrumb/Breadcrumb3";
import Wrapper from "../../components/Layout/Wrapper";
import useFetchData from "../../hooks/useFetchData";
import { baseUrl, photoUrl } from "../../api/baseUrl";
import Loading from "../../components/SideComponents/Loading/Loading";
import axios from "axios";
import { useQuery } from "react-query";
import textCrop from "../../utils/textCrop";
import SelectLearningPathCategory from "../../components/LearningPath/SelectPortofolioCategory";
import Search from "../../components/Elements/Search";
import LearningPathCard from "../../components/LearningPath/LearningPathCard";
import { learningpathdetails } from "../../api/basePath";
// const dummyData = {
//   data: [
//     {
//       description:
//         "loerem impesiun dolor sit amet loerem impesiun dolor sit amet loerem impesiun dolor sit ametloerem impesiun dolor sit amet",
//       id_client: 1,
//       id_learning_path: 1,
//       is_aktif: 1,
//       number_of_course: 3,
//       name: "Python",
//       photo: "2020-06-19_204727_learning_path.png",
//       price: 0,
//     },
//     {
//       description:
//         "loerem impesiun dolor sit amet loerem impesiun dolor sit amet loerem impesiun dolor sit ametloerem impesiun dolor sit amet",
//       id_client: 1,
//       id_learning_path: 1,
//       number_of_course: 3,
//       is_aktif: 1,
//       name: "Python",
//       photo: "2020-06-19_204727_learning_path.png",
//       price: 0,
//     },
//     {
//       description:
//         "loerem impesiun dolor sit amet loerem impesiun dolor sit amet loerem impesiun dolor sit ametloerem impesiun dolor sit amet",
//       id_client: 1,
//       id_learning_path: 1,
//       number_of_course: 3,
//       is_aktif: 1,
//       name: "Python",
//       photo: "2020-06-19_204727_learning_path.png",
//       price: 0,
//     },
//   ],
// };

const LearningPath = () => {
  const [category, setCategory] = useState("desc");
  const [search, setSearch] = useState("");

  const getData = async () => {
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      baseUrl.baseUrl +
        "/learning_path/get_learning_path?order_by=" +
        category +
        "&q=" +
        search,
      header
    );
    // assertIsCharacterResponse(data);
    return data;
  };

  const {
    isLoading: loadingLearningPath,
    isError,
    data: dummyData,
    error,
    refetch,
  } = useQuery(["learningpath", search, category], getData);

  if (isError) {
    return <h1>{error}</h1>;
  }

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const breadcrumbContent = {
    title: "Learning Path",
  };
  return (
    <Wrapper>
      <Breadcrumb3 content={breadcrumbContent} />
      <div className="bg-light pt-30">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <SelectLearningPathCategory
                value={category}
                selectHandler={categoryHandler}
              />
            </div>
            <div className="col-4">
              <Search
                placeholder={"Cari Portofolio"}
                searchHandler={searchHandler}
              />
            </div>
          </div>
          <div className="row">
            {loadingLearningPath ? (
              <Loading />
            ) : (
              dummyData.data.map((learningPath) => (
                <Link
                  to={learningpathdetails(learningPath.id_learning_path)}
                  key={learningPath.id_learning_path}
                >
                  <LearningPathCard learningPath={learningPath} />
                </Link>
              ))
            )}
          </div>
        </div>
        ;
      </div>
    </Wrapper>
  );
};

export default LearningPath;
