import React from "react";
import isEmpty from "lodash.isempty";
import { Formik, Form, FieldArray } from "formik";
import { MdAddBox, MdClose } from "react-icons/md";

import AmountInput from "components/FormElements/AmountInput";
import PhoneNumberInput from "components/FormElements/PhoneNumberInput";
import TextInput from "components/FormElements/TextInput";
import StyledButton from "components/CustomButton";
import useCustomToast from "hooks/useCustomToast";

import { sendToPhoneSchema } from "utils/validationSchema";
import { validateAmountInput } from "utils/validateAmount";

import { TabWrapper, ButtonWrapper } from "./styles";

const Phone = () => {
  const { doToast } = useCustomToast();
  const receipentObj = { amount: "", mobile: "", remark: "" };
  const handleSubmit = (values, setSubmitting) => {
    // console.log(values);
    doToast("Leggo!", "Transaction Completed Successfully");
    setSubmitting(false);
  };

  return (
    <TabWrapper>
      <p>Enter Details</p>
      <Formik
        initialValues={{ recipients: [{ ...receipentObj }] }}
        onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
        validationSchema={sendToPhoneSchema}
      >
        {({ values, isSubmitting, setFieldValue, errors }) => (
          <Form>
            <FieldArray name="recipients">
              {({ remove, push }) => (
                <>
                  {values?.recipients?.length > 0 &&
                    values.recipients.map((_, i) => (
                      <div className="inline-fields" key={`recipients-${i}`}>
                        <AmountInput
                          placeholder="Amount"
                          name={`recipients.${i}.amount`}
                          onChange={e =>
                            setFieldValue(`recipients.${i}.amount`, validateAmountInput(e))
                          }
                        />
                        <PhoneNumberInput
                          name={`recipients.${i}.mobile`}
                          placeholder="Phone number"
                        />
                        <TextInput
                          placeholder="remark (optional)"
                          name={`recipients.${i}.remark`}
                        />
                        {i !== 0 ? (
                          <button
                            className="remove"
                            aria-label="remove recpient"
                            type="button"
                            onClick={() => remove(i)}
                          >
                            <MdClose fontSize={18} />
                          </button>
                        ) : null}
                      </div>
                    ))}
                  <button type="button" onClick={() => push({ ...receipentObj })}>
                    <MdAddBox />
                    Add New Recipient
                  </button>
                </>
              )}
            </FieldArray>
            <ButtonWrapper>
              <StyledButton
                type="submit"
                isLoading={false}
                disabled={isSubmitting || !isEmpty(errors)}
              >
                Send Money
              </StyledButton>
            </ButtonWrapper>
          </Form>
        )}
      </Formik>
    </TabWrapper>
  );
};

export default Phone;
