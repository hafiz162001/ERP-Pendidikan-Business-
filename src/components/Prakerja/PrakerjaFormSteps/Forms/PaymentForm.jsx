import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { InputField, DatePickerField, CheckboxField } from "../FormFields";
import MultipleSelect from "../FormFields/MultipleSelect";

export default function PaymentForm(props) {
  const {
    formField: {
      courseAcademy,
      coursePrakerja,
      nameOnCard,
      cardNumber,
      expiryDate,
      cvv,
      program,
    },
    questionData,
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        {questionData[6].question}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* {questionData[6]?.options?.map((data) => (
            <CheckboxField name={data.opt_name} label={data.opt_name} />
          ))} */}
          <MultipleSelect
            name={program.name}
            label={questionData[6].question}
            options={questionData[6].options}
          />
          {/* <CheckboxField
            name={courseAcademy.name}
            label={courseAcademy.label}
          />
          <CheckboxField
            name={coursePrakerja.name}
            label={coursePrakerja.label}
          /> */}
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <InputField
            name={nameOnCard.name}
            label={nameOnCard.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            name={cardNumber.name}
            label={cardNumber.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePickerField
            name={expiryDate.name}
            label={expiryDate.label}
            format="MM/yy"
            views={['year', 'month']}
            minDate={new Date()}
            maxDate={new Date('2050/12/31')}
            fullWidth
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}
