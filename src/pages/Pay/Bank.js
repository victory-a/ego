import React from "react";
import { queryCache, useMutation } from "react-query";
import isEmpty from "lodash.isempty";
import { Formik, Form } from "formik";
import { useDisclosure } from "@chakra-ui/core";
import { useFetchBeneficiaries } from "lib/queries/data";

import { sendToBank } from "lib/transaction";

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
import banks from "data/banks.json";

const Bank = () => {
  const { doToast } = useCustomToast();
  const { data: beneficiariesData } = useFetchBeneficiaries();
  const [mutate] = useMutation(sendToBank);

  const [beneficiaries, setBeneficiaries] = React.useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [beneficiaryToBeDeleted, setBeneficiaryToBeDeleted] = React.useState(null);

  React.useEffect(() => {
    if (beneficiariesData?.length > 0) {
      setBeneficiaries(beneficiariesData);
    }
  }, [beneficiariesData]);

  React.useEffect(() => {
    // console.log("delete", beneficiaryToBeDeleted);
  });

  async function handleSubmit(values, setSubmitting) {
    const payload = {
      amount: values.amount,
      category: "debit",
      recipient: {
        accountName: "Random name",
        accountNumber: values.accountNumber,
        bankCode: values.bankCode,
        remark: values.remark
      }
    };

    await mutate(payload, {
      onSuccess: async () => {
        await queryCache.invalidateQueries("getTransactions");
        await queryCache.invalidateQueries("getBalance");
        doToast("Leggo!", "Transaction Completed Successfully");
      },

      onError: error => {
        doToast("Failed", error, "error");
      }
    });

    setSubmitting(false);
  }

  function confirmDelete() {
    setBeneficiaries(
      beneficiaries.filter(beneficiary => beneficiaryToBeDeleted !== beneficiary._id)
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
        initialValues={{ amount: "", bankName: "", bankCode: "", accountNumber: "", remark: "" }}
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
                        setBeneficiaryToBeDeleted(beneficiary._id);
                        onOpen();
                      }}
                      selected={Boolean(
                        values.bankCode === beneficiary.bankCode &&
                          values.accountNumber === beneficiary.accountNumber
                      )}
                      onClick={() => {
                        setFieldValue("bankCode", beneficiary.bankCode);
                        // setFieldValue("bankName", beneficiary.bankName);
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
                <TextInput placeholder="Remark (optional)" name="remark" />
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
