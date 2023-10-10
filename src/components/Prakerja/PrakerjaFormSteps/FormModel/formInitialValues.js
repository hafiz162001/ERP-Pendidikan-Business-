import checkoutFormModel from "./checkoutFormModel";
const {
  formField: {
    email,
    firstName,
    lastName,
    address1,
    city,
    phoneNumber,
    courseAcademy,
    coursePrakerja,
    // country,
    useAddressForPaymentDetails,
    nameOnCard,
    cardNumber,
    expiryDate,
    cvv,
    program,
  },
} = checkoutFormModel;

export default {
  [email.name]: "",
  [firstName.name]: "",
  [lastName.name]: "",
  [address1.name]: "",
  [city.name]: "",
  [phoneNumber.name]: "",
  [courseAcademy.name]: false,
  [coursePrakerja.name]: false,
  // [country.name]: '',
  [useAddressForPaymentDetails.name]: false,
  [nameOnCard.name]: "",
  [cardNumber.name]: "",
  [expiryDate.name]: "",
  [expiryDate.name]: "",
  [program.name]: "",
  [cvv.name]: "",
};
