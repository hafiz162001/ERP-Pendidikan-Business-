import React from "react";
import {
  Grid,
  Typography,
  ListItem,
  ListItemText,
  List,
} from "@material-ui/core";
import UploadDokumenPerizinan from "../FileUpload/UploadDokumenPerizinan";
import UploadDokumen from "../FileUpload/UploadDokumen";

function DocumentUpload({
  questionData,
  file1,
  file1Handler,
  file2,
  file2Handler,
}) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        {questionData[7].question}
      </Typography>
      {questionData[7].info}
      {/* <ul>
        <li>Profil lembaga setidaknya berisikan hal berikut ini:</li>
        <li>1. Riwayat Lembaga</li>
        <li>2. SDM Penggerak Utama Lembaga/Struktur Organisasi</li>
        <li>
          3. Daftar Jenis Pelatihan dan Instruktur (Wajib untuk Kartu Prakerja)
        </li>
        <li>
          4. Sarana Prasana Pelatihan (Daring/Luring) (Wajib untuk Kartu
          Prakerja)
        </li>
        <li>5. Detail Kontak Lembaga</li>
      </ul>
      <p></p> */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <UploadDokumen file={file1} fileHandler={file1Handler} />
          {/* <UploadDokumenPerizinan /> */}
        </Grid>
      </Grid>

      <Typography variant="h6" gutterBottom>
        {questionData[8].question}
      </Typography>
      {questionData[8].info}
      {/* <ul>
        <li>
          Unggah salah satu dokumen perizinan berikut (diprioritaskan dari
          urutan yang teratas)
        </li>
        <li>1. Nomor Induk Berusaha (NIB)</li>
        <li>2. Surat Izin Usaha Perdagangan (SIUP)</li>
        <li>3. Izin Operasional/Penyelenggaraan Satuan</li>
        <li>4. Surat Keputusan/Penetapan/Izin Pendirian atau Pengesahan</li>
        <li>5. Dokumen perizinan lainnya</li>
      </ul>
      <p></p> */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <UploadDokumen file={file2} fileHandler={file2Handler} />
          {/* <UploadDokumenPerizinan /> */}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default DocumentUpload;
