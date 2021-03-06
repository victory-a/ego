import * as Yup from "yup";

const mobileValidation = Yup.string()
  .required("Phone number is required.")
  .test("validity", "Kindly provide a valid phone number.", val => {
    if (val !== undefined && val.includes("-")) {
      const regex = new RegExp(/^0[789][01][0-9]-[0-9]{3}-[0-9]{4}$/, "i");
      return val.match(regex);
    } else if (val !== undefined) {
      const regexx = new RegExp(/^0[789][01][0-9]{8}$/, "i");
      return val.match(regexx);
    }
  });

const amountValidation = Yup.string()
  .required("Amount is required")
  .test("range", "limit is 100K", val => {
    if (val !== undefined) {
      return val !== undefined && parseInt(val) <= 100000000;
    }
  });

export const accountValidation = Yup.string()
  .required("Please enter your bank account number")
  .test("len", "Must be exactly 10 characters", val => {
    if (val !== undefined) {
      return val !== undefined && val.toString().length === 10;
    }
  });

export const customerIDValidation = Yup.number()
  .required("customer ID required")
  .test("len", "Must be exactly 4 characters", val => {
    if (val !== undefined) {
      return val !== undefined && val.toString().length === 4;
    }
  });

const randomText = Yup.string().max(256, "limit is 256 characters");

const bankValidation = Yup.string().required("Select a bank");

export const getStartedValidation = Yup.object().shape({
  mobile: mobileValidation
});

export const otpValidation = Yup.object().shape({
  pin: Yup.string()
    .required("Pin is required.")
    .test("len", "6 digit pin required", val => {
      if (val !== undefined) {
        return val.toString().length === 6;
      }
    })
});

export const sendToPhoneSchema = Yup.object().shape({
  recipients: Yup.array().of(
    Yup.object().shape({
      amount: amountValidation,
      mobile: mobileValidation,
      remark: randomText
    })
  )
});

export const buyAirtimeSchema = Yup.object().shape({
  amount: amountValidation,
  mobile: mobileValidation,
  subscriber: Yup.string().required("Please select a subscriber")
});

export const sendToBankSchema = Yup.object().shape({
  amount: amountValidation,
  bankCode: bankValidation,
  accountNumber: accountValidation,
  remark: randomText
});

export const tvBillSchema = Yup.object().shape({
  subscriber: Yup.string().required("Please select a subscriber"),
  paymentCode: Yup.string().required("Select a Plan"),
  plan: Yup.string().required("Select a plan"),
  amount: amountValidation,
  customerID: customerIDValidation
});

export const utilityBillSchema = Yup.object().shape({
  disco: Yup.string().required("Please select a disco"),
  amount: amountValidation,
  customerID: customerIDValidation
});
