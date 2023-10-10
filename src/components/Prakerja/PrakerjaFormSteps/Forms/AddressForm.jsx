import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { InputField, CheckboxField, SelectField } from "../FormFields";

const cities = [
  {
    value: undefined,
    label: "None",
  },
  {
    value: "1",
    label: "Perguruan Tinggi",
  },
  {
    value: "2",
    label: "Lembaga Pelatihan Kerja",
  },
  {
    value: "3",
    label: "Balai Latihan Kerja",
  },
  {
    value: "4",
    label: "Lembaga Kursus Pelatihan",
  },
  {
    value: "5",
    label: "Lembaga Berbadan Hukum Lainnya",
  },
];

export default function AddressForm(props) {
  const {
    formField: { email, firstName, lastName, address1, city, phoneNumber, cvv },
    questionData,
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom></Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputField
            name={email.name}
            label={questionData[0].question}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <SelectField
            name={city.name}
            label={questionData[1].question}
            data={questionData[1].options}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name={firstName.name}
            label={questionData[2].question}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name={lastName.name}
            label={questionData[3].question}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name={address1.name}
            label={questionData[4].question}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name={phoneNumber.name}
            label={questionData[5].question}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <InputField
            name={cvv.name}
            label={questionData[9].question}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
