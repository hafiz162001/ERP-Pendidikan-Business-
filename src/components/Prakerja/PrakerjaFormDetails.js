import React, {useState} from 'react'
import CheckoutPage from './PrakerjaFormSteps'
import MaterialLayout from './PrakerjaFormSteps/Layout/MaterialLayout'
// import {Formik, Form} from 'formik';

// import AddressForm from './PrakerjaFormSteps/AddressForm';
// import PaymentForm from './PrakerjaFormSteps/PaymentForm';
// import ReviewOrder from './PrakerjaFormSteps/ReviewOrder';

// import validationSchema from './Model/validationSchema';
// import formInitialValue from './Model/formInitialValue';
// import checkoutFormModel from './Model/checkoutFormModel'

// const steps = ['Shipping address', 'Payment details', 'Review your order'];
// const {formId, formField} = checkoutFormModel;

// function _renderStepContent(step) {
//   switch (step) {
//     case 0:
//       return <AddressForm formField={formField} />;
//     case 1:
//       return <PaymentForm formField={formField} />;
//     case 2:
//       return <ReviewOrder />;
//     default:
//       return <div>Not Found</div>;
//   }
// }

function PrakerjaFormDetails() {
//   const [activeStep, setActiveStep] = useState(0);
//   const currentValidationSchema = validationSchema[activeStep];
//   const isLastStep = activeStep === steps.length - 1;

//   function _sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }

//   async function _submitForm(values, actions) {
//     await _sleep(1000);
//     alert(JSON.stringify(values, null, 2));
//     actions.setSubmitting(false);

//     setActiveStep(activeStep + 1);
//   }

//   function _handleSubmit(values, actions) {
//     if (isLastStep) {
//       _submitForm(values, actions);
//     } else {
//       setActiveStep(activeStep + 1);
//       actions.setTouched({});
//       actions.setSubmitting(false);
//     }

//   function _handleBack() {
//     setActiveStep(activeStep - 1);
//   }

  return (
    <MaterialLayout>
       <CheckoutPage/>
    </MaterialLayout>
  )
}

export default PrakerjaFormDetails