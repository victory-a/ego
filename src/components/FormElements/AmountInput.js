import React from "react";
import NumberFormat from "react-number-format";
import { useField } from "formik";
import { Input, FormLabel, FormControl, FormErrorMessage } from "@chakra-ui/core";

const AmountInput = props => {
  const { label, name, disabled } = props;
  const [field, meta] = useField(props);
  return (
    <FormControl mb="1rem" isInvalid={Boolean(meta.touched && meta.error)}>
      {label ? <FormLabel htmlFor={name}>{label}</FormLabel> : null}

      <NumberFormat
        decimalScale={2}
        name={name}
        disabled={disabled}
        isNumericString={true}
        allowNegative={false}
        thousandSeparator={true}
        customInput={Input}
        prefix="₦"
        {...field}
        {...props}
      />

      {meta.touched && meta.error ? (
        <FormErrorMessage fontSize="md">{meta.error}</FormErrorMessage>
      ) : null}
    </FormControl>
  );
};

export default AmountInput;
