import React from "react";
import { Formik, Form } from "formik";
import { useDisclosure } from "@chakra-ui/core";

import TextInput from "components/FormElements/TextInput";
import StyledButton from "components/CustomButton";

import { TabWrapper, ButtonWrapper, SavedBanksWrapper } from "./styles";
import { InlineFields } from "layout/AppLayout/styles";

import { sendToBankSchema } from "utils/validationSchema";
import SelectInput from "components/FormElements/SelectInput";
import BankAccountCard from "components/BankAccountCard";
import savedAccounts from "data/savedAccounts";

import banks from "data/banks.json";
import Alert from "components/Alert.js/Index";

const Bank = () => {
  const [beneficiaries, setBeneficiaries] = React.useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [beneficiaryToBeDeleted, setBeneficiaryToBeDeleted] = React.useState(null);

  React.useEffect(() => {
    setBeneficiaries(savedAccounts);
  }, []);

  React.useEffect(() => {
    // console.log("delete", beneficiaryToBeDeleted);
  });

  function handleSubmit(values, setSubmitting) {
    // console.log(values);
    setSubmitting(false);
  }

  function confirmDelete() {
    setBeneficiaries(
      beneficiaries.filter(beneficiary => beneficiaryToBeDeleted !== beneficiary.id)
    );
  }

  return (
    <TabWrapper>
      {isOpen ? (
        <Alert
          {...{
            isOpen,
            onClose,
            title: "Delete beneficiary",
            onConfirm: confirmDelete,
            cleanup: () => setBeneficiaryToBeDeleted(null),
            size: { base: "80%", tablet: "550px" }
          }}
        >
          <p>Are you sure you want to delete beneficiary?</p>
        </Alert>
      ) : null}
      <p>Saved bank account:</p>

      <Formik
        initialValues={{ amount: "", bankName: "", bankCode: "", accountNumber: "", narration: "" }}
        onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
        validationSchema={sendToBankSchema}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <>
            {beneficiaries.length > 0 ? (
              <SavedBanksWrapper>
                {beneficiaries.map((beneficiary, i) => (
                  <BankAccountCard
                    beneficiary={beneficiary}
                    onDelete={() => {
                      setBeneficiaryToBeDeleted(beneficiary.id);
                      onOpen();
                    }}
                    selected={Boolean(
                      values.bankCode === beneficiary.bankCode &&
                        values.accountNumber === beneficiary.accountNumber
                    )}
                    onClick={() => {
                      setFieldValue("bankCode", beneficiary.bankCode);
                      setFieldValue("bankName", beneficiary.bankName);
                      setFieldValue("accountNumber", beneficiary.accountNumber);
                    }}
                    key={`beneficiary-${i}`}
                  />
                ))}
              </SavedBanksWrapper>
            ) : null}

            <p>Enter Details</p>
            <Form>
              <InlineFields>
                <TextInput placeholder="Amount" type="number" name="amount" />
                <SelectInput
                  placeholder="Select bank"
                  name="bankCode"
                  options={banks}
                  onChange={e => {
                    setFieldValue("accountNumber", "");
                    setFieldValue("bankCode", e.target.value);

                    const nativeTarget = e.nativeEvent.target;
                    const index = nativeTarget.selectedIndex;
                    const text = nativeTarget[index].text;
                    setFieldValue("bankName", text);
                  }}
                />
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
          </>
        )}
      </Formik>
    </TabWrapper>
  );
};

export default Bank;
