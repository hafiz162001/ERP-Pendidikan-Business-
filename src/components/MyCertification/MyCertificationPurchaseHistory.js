import React from "react";
import useFetchDataWithAuth from "../../hooks/useFetchDataWithAuth";
import numberWithCommas from "../../utils/numberWithCommas";
import MyCoursePurchaseHistoryCard from "../MyCourse/PurchaseHistory/MyCoursePurchaseHistoryCard";
import Loading from "../SideComponents/Loading/Loading";
import MyCertificationPurchaseHistoryCard from "./MyCertificationPurchaseHistoryCard";
import { useSessionStorage } from "react-use";
import Pagination from "../Elements/Pagination";

const dummyData = {
  code_unic: 781,
  created_at: "Tue, 14 Jun 2022 01:35:52 GMT",
  customer_account: null,
  expired_at: "Tue, 14 Jun 2022 04:35:52 GMT",
  foto_partner: "2021-12-01_121230_foto_partner_sertifikasi.png",
  foto_sertifikasi: "2022-01-16_223624_foto_partner_sertifikasi.png",
  foto_sertifikat: null,
  id_certification: 6,
  id_certification_coupon: null,
  id_certification_partner: 1,
  id_certification_transaction: 2,
  id_customer: 113,
  id_customer_certification: 2,
  id_user: 114,
  invoice_number: "69962096350219",
  nama_partner: "Bakerspice",
  nama_sertifikasi:
    "Pelatihan + International Certification Autodesk Certified User AutoCAD (ACU AutoCAD)",
  photo: null,
  redirect_data: null,
  redirect_url:
    "https://m.dana.id/m/portal/cashier/checkout?bizNo=20220614111212800110166231864342543&amp;timestamp=1655145352922&amp;originSourcePlatform=IPG&amp;mid=216620000172352581012&amp;sign=wWrXMTenPFACPN%2Bykzfsy3bxtB5DXc3WBBNMe6vzKJ536YqBn%2FrCiu5YZW03l7jOR2JHzxXRIVJIYNUiQjndBFaT0ibiTw9TFSpycLJNgoYQEcHhc88VFQP5px9JwZwCGSV%2B0zBadH2yduHOXv3PnUK6XaTlDo1zccR6kG5M1RjSlwvHAQ1TlcxAY7x9toHDhsscsNNp295khv2ChB0lLvT8dbNMCkiUQIO%2BMVAT4xwzNz1eIf6vnwa167TR3%2FbZykowNLYOMi%2BKJxTkezRQ9CPreAIXdQaUD3oCikCVkbATxlI7flGtIxuJRXKBDfIkOnCpMnVPQiRxf6KmOuRSCw%3D%3D&ott=",
  service_code: "1084",
  status: 1,
  status_certification: 1,
  tipe_sertifikasi: 1,
  total_price: 2500781,
  user_email: "almanurh26@gmail.com",
  user_name: "Alma Nur Habibah",
  user_phone: "085159660260",
  waktu_melakukan_pembayaran: null,
};

function MyCertificationPurchaseHistory({ search, status }) {
  const [page, setPage] = useSessionStorage("certificationph", 1);
  const { data: myTransaction, loading: loadingMyTransaction } =
    useFetchDataWithAuth(
      "certification/get_certification_transaction?search=" +
        search +
        "&status=" +
        status +
        "&page=" +
        page
    );
  if (loadingMyTransaction) return <Loading />;

  return (
    <>
      {!loadingMyTransaction ? (
        myTransaction?.data?.map((dummyData) => {
          return (
            <MyCertificationPurchaseHistoryCard
              key={dummyData.id_certification}
              dummyData={dummyData}
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

export default MyCertificationPurchaseHistory;
