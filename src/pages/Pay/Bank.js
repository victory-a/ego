import React from "react";
import isEmpty from "lodash.isempty";
import { Formik, Form } from "formik";
import { useDisclosure } from "@chakra-ui/core";

import TextInput from "components/FormElements/TextInput";
import StyledButton from "components/CustomButton";
import Alert from "components/Alert.js/Index";
import SelectInput from "components/FormElements/SelectInput";
import BankAccountCard from "components/BankAccountCard";
import AmountInput from "components/FormElements/AmountInput";
import useCustomToast from "hooks/useCustomToast";

import { TabWrapper, ButtonWrapper, SavedBanksWrapper } from "./styles";
import { InlineFields } from "layout/AppLayout/styles";

import { sendToBankSchema } from "utils/validationSchema";
import { validateAmountInput } from "utils/validateAmount";
import savedAccounts from "data/savedAccounts";

import banks from "data/banks.json";

const Bank = () => {
  const { doToast } = useCustomToast();
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
    doToast("Leggo!", "Transaction Completed Successfully");

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

      <Formik
        initialValues={{ amount: "", bankName: "", bankCode: "", accountNumber: "", narration: "" }}
        onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
        validationSchema={sendToBankSchema}
      >
        {({ isSubmitting, setFieldValue, values, errors }) => (
          <>
            {beneficiaries.length > 0 ? (
              <>
                <p>{`Saved bank ${beneficiaries.length > 1 ? "accounts" : "account"}`}</p>
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
              </>
            ) : null}

            <p>Enter Details</p>
            <Form>
              <InlineFields>
                <AmountInput
                  placeholder="Amount"
                  name="amount"
                  onChange={e => setFieldValue("amount", validateAmountInput(e))}
                />
                <SelectInput
                  placeholder="Select bank"
                  name="bankCode"
                  options={banks}
                  onChange={({ target: { value }, nativeEvent: { target: nativeTarget } }) => {
                    setFieldValue("accountNumber", "");
                    setFieldValue("bankCode", value);

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
                <StyledButton
                  type="submit"
                  isLoading={false}
                  disabled={isSubmitting || !isEmpty(errors)}
                >
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
