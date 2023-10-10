import React, { useState } from "react";
import useFetchDataWithAuth from "../../../hooks/useFetchDataWithAuth";
import Pagination from "../../Elements/Pagination";
import Loading from "../../SideComponents/Loading/Loading";
import MyCoursePurchaseHistoryCard from "./MyCoursePurchaseHistoryCard";
import SelectPurchaseTypes from "./SelectPurchaseTypes";
import { useSessionStorage } from "react-use";

function MyCoursePurchaseHistory({ search, status, category }) {
  const [page, setPage] = useSessionStorage("purchasehistory", 1);
  let url;
  if (category === "course") {
    url = "transaction/get_transaction_course";
  }
  if (category === "learningPath") {
    url = "transaction/get_transaction_learning_path";
  }
  const { data: myTransaction, loading: loadingMyTransaction } =
    useFetchDataWithAuth(
      url + "?order_by=DESC&q=" + search + "&status=" + status + "&page=" + page
    );
  if (loadingMyTransaction) return <Loading />;

  return (
    <>
      {!loadingMyTransaction ? (
        myTransaction.data.map((data) => {
          const dummyData = {
            course_name: data.learning_path_name,
            id_customer_course: data.id_customer_learning_path,
            photo_course: data.photo_learning_path,
            ...data,
          };
          return (
            <MyCoursePurchaseHistoryCard
              key={data.id_transaction}
              myTransaction={dummyData}
              type="Course"
            />
          );
        })
      ) : (
        <Loading />
      )}
      <div className="container">
        <div className="row">
          <div className="col-6 text-start">
            Total {myTransaction.row_count} data
          </div>
          <div className="col-6 text-end">
            <Pagination
              page={page}
              setPage={setPage}
              dummyData={myTransaction.data}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyCoursePurchaseHistory;
