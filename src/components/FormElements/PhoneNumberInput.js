import React from "react";
import NumberFormat from "react-number-format";
import { useField } from "formik";
import { Input, FormLabel, FormControl, FormErrorMessage } from "@chakra-ui/core";

export default function PhoneNumberInput(props) {
  const { label, name } = props;
  const [field, meta] = useField(props);

  return (
    <FormControl mb="1rem" isInvalid={Boolean(meta.touched && meta.error)}>
      <FormLabel htmlFor={name}>{label}</FormLabel>

      <NumberFormat
        type="tel"
        name={name}
        customInput={Input}
        format="####-###-####"
        {...field}
        {...props}
      />

      {meta.touched && meta.error ? <FormErrorMessage>{meta.error}</FormErrorMessage> : null}
    </FormControl>
  );
}
