import React from "react";
import { Formik, Field, Form } from "formik";
import Wrapper from "./../Layout/Wrapper";

// prakerja term and condition

function PrakerjaFormTC() {
  return (
    <div className="container">
      <div className="">
        <h1>Penting untuk diketahui</h1>
        <ol className="list-group list-group-numbered">
          <li className="list-group-item">
            Form ini hanya berlaku untuk pengajuan kemitraan penyedia pelatihan
            di platform Bakerspice Academy.
          </li>
          <li className="list-group-item">
            Hanya lembaga berbadan hukum yang dapat menjadi mitra penyedia
            pelatihan Bakerspice Academy.
          </li>
          <li className="list-group-item">
            Dengan bergabung menjadi mitra Bakerspice Academy, maka pihak
            mitra menyetujui melakukan penjualan program pelatihan melalui
            Platform Bakerspice Academy.
          </li>
          <li className="list-group-item">
            Status pengajuan kemitraan melalui form ini akan dibalas paling
            lambat 3 hari kerja.
          </li>
        </ol>
        {/* <Formik
                initialValues={{
                    toggle: false
                }}
                onSubmit={async (values) => {
                    alert(JSON.stringify(values));
                }}
                >
                {({ values }) => (
                    <Form>
                    <label>
                        <Field type="checkbox" name="toggle" />
                        {`${values.toggle}`}
                    </label>
                    <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik> */}
      </div>
    </div>
  );
}

export default PrakerjaFormTC;
