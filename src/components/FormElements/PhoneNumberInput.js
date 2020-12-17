import React from "react";
import NumberFormat from "react-number-format";
import { useField } from "formik";
import { Input, FormLabel, FormControl, FormErrorMessage } from "@chakra-ui/core";

export default function PhoneNumberInput(props) {
  const { label, name } = props;
  const [field, meta] = useField(props);

  return (
    <FormControl mb="1rem" isInvalid={Boolean(meta.touched && meta.error)}>
      {label ? <FormLabel htmlFor={name}>{label}</FormLabel> : null}

      <NumberFormat
        type="tel"
        name={name}
        customInput={Input}
        format="####-###-####"
        {...field}
        {...props}
      />

      {meta.touched && meta.error ? (
        <FormErrorMessage fontSize="md">{meta.error}</FormErrorMessage>
      ) : null}
    </FormControl>
  );
}
