import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

function FAQ() {
  return (
    <div className="bg-light pt-100">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="brand__content text-center">
              <h3 className="fw-bold"> Frequently Asked Question </h3>
            </div>
          </div>
        </div>
        <Accordion allowMultipleExpanded="true" allowZeroExpanded="true">
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Bagaimana tata cara pendaftaran
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item">
                  Warga Negara Indonesia Berusia 18 Tahun ke atas yang tidak
                  sedang menempuh pendidikan formal dapat mendaftar di Kartu
                  Prakerja di alamat{" "}
                  <a href="https://www.prakerja.go.id/">
                    https://www.prakerja.go.id/
                  </a>
                </li>
                <li className="list-group-item">
                  Daftar Bakerspice Academy melalui Platform Prakerja
                </li>
                <li className="list-group-item">
                  Beli pelatihan Bakerspice Academy di melalui alamat{" "}
                  <a href="https://app.karier.mu/mitra/bisa-al-academy">
                    https://app.karier.mu/mitra/bisa-al-academy
                  </a>
                  . Gunakan saldo prakerja anda dan pilih program Pelatihan BakerSpice Academy. Dapatkan token / kode dari untuk menukarkan di
                  pelatihan bisa.ai academy.
                </li>
                <li className="list-group-item">
                  Pilih program pelatihan Prakerja yang tersedia di{" "}
                  <a href="https://bisa.ai/prakerja">
                    https://bisa.ai/prakerja
                  </a>
                  . Ketika Checkout, tukarkan kode/token anda.{" "}
                </li>
              </ol>
            </AccordionItemPanel>
          </AccordionItem>
          {/* <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Details Couse</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Course ini dilaksanakan oleh dan sebagai gantinya memungkinkan
                kita untuk bisa belajar tentang tanaman dan hal lain menariknay
                hal ini sangat diinginkan oleh orang lain
              </p>
            </AccordionItemPanel>
          </AccordionItem> */}
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;
