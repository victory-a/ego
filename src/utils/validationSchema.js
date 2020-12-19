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

const amountValidation = Yup.number()
  .required("Amount is required")
  .min(1, "should be greater than zero")
  .max(100000, "limit is 100k");

const randomText = Yup.string().max(255, "limit is 255 characters");

export const getStartedValidation = Yup.object().shape({
  mobile: mobileValidation
});

export const otpValidation = Yup.object().shape({
  passcode: Yup.string().required("OTP is required.")
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
  mobile: mobileValidation
});
