import React from "react";
import { Formik, Form } from "formik";

import TextInput from "components/FormElements/TextInput";
import StyledButton from "components/CustomButton";

import { TabWrapper, ButtonWrapper } from "./styles";
import { InlineFields } from "layout/AppLayout/styles";

import { sendToBankSchema } from "utils/validationSchema";
import SelectInput from "components/FormElements/SelectInput";
import useBanks from "lib/queries/banks";

const Bank = () => {
  const [banks, setBanks] = React.useState([]);
  const { status, data } = useBanks();

  React.useEffect(() => {
    if (data) {
      setBanks(data);
    }
  }, [data, status]);

  const handleSubmit = (values, setSubmitting) => {
    // console.log(values);

    setSubmitting(false);
  };

  return (
    <TabWrapper>
      <p>Enter Details</p>
      <Formik
        initialValues={{ amount: "", bank: "", accountNumber: "", narration: "" }}
        onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
        validationSchema={sendToBankSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <InlineFields>
              <TextInput placeholder="Amount" type="number" name="amount" />
              <SelectInput placeholder="Select bank" name="bank" options={banks} />
            </InlineFields>
            <InlineFields>
              <TextInput
                placeholder="Account number"
                type="number"
                name="accountNumber"
                maxLength="10"
              />
              <TextInput placeholder="Narration (optional)" name="narration" />
            </InlineFields>
            <ButtonWrapper>
              <StyledButton type="submit" isLoading={false} disabled={Boolean(isSubmitting)}>
                Send Money
              </StyledButton>
            </ButtonWrapper>
          </Form>
        )}
      </Formik>
    </TabWrapper>
  );
};

export default Bank;
