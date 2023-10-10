export default {
  formId: "checkoutForm",
  formField: {
    email: {
      name: "email",
      label: "Email Narahubung",
      requiredErrorMsg: "Field harus di isi",
      invalidErrorMsg: "Invalid email format",
    },
    firstName: {
      name: "merk",
      label: "Nama Merek/Brand Lembaga",
      requiredErrorMsg: "Field harus di isi",
    },
    lastName: {
      name: "badanhukum",
      label: "Nama Badan Hukum Lembaga",
      requiredErrorMsg: "Field harus di isi",
    },
    address1: {
      name: "narahubung",
      label: "Nama Narahubung Kemitraan",
      requiredErrorMsg: "Field harus di isi",
    },
    address2: {
      name: "address2",
      label: "Address Line 2",
    },
    city: {
      name: "city",
      label: "Jenis Lembaga",
      requiredErrorMsg: "Pilih salah satu jenis lembaga berikut",
    },
    state: {
      name: "state",
      label: "State/Province/Region",
    },
    phoneNumber: {
      name: "phoneNumber",
      label: "Nomor Telp/Selular Narahubung Kemitraan",
      requiredErrorMsg: "Fild harus di isi",
      invalidErrorMsg: "Nomor Telp/Selular tidak valid (e.g. )",
    },
    courseAcademy: {
      name: "courseAcademy",
      label: "BakerSpice (Mahasiswa & Profesional)",
    },
    coursePrakerja: {
      name: "coursePrakerja",
      label: "BakerSpice-Prakerja (Penerima Manfaat Kartu Prakerja)",
    },
    country: {
      name: "country",
      label: "Country*",
      requiredErrorMsg: "Country is required",
    },
    useAddressForPaymentDetails: {
      name: "useAddressForPaymentDetails",
      label: "Use this address for payment details",
    },
    nameOnCard: {
      name: "nameOnCard",
      label: "Name on card*",
      requiredErrorMsg: "Name on card is required",
    },
    cardNumber: {
      name: "cardNumber",
      label: "Card number*",
      requiredErrorMsg: "Card number is required",
      invalidErrorMsg: "Card number is not valid (e.g. 4111111111111)",
    },
    expiryDate: {
      name: "expiryDate",
      label: "Expiry date*",
      requiredErrorMsg: "Expiry date is required",
      invalidErrorMsg: "Expiry date is not valid",
    },
    cvv: {
      name: "catatan",
      label: "Catatan",
      requiredErrorMsg: "optional",
      invalidErrorMsg: "",
    },
    program: {
      name: "program",
      label: "Program yng bisa dipilih",
    },
  },
};
