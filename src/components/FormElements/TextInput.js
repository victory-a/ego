import React from "react";
import { useField } from "formik";
import { Input, FormLabel, FormControl, FormErrorMessage } from "@chakra-ui/core";

export default function TextInput(props) {
  const [field, meta] = useField(props);
  const { label, name, type = "text" } = props;

  return (
    <FormControl mb="1.5rem" isInvalid={Boolean(meta.touched && meta.error)}>
      <FormLabel htmlFor={name}>{label}</FormLabel>

      <Input name={name} type={type} {...field} {...props} />

      {meta.touched && meta.error ? (
        <FormErrorMessage fontSize="md">{meta.error}</FormErrorMessage>
      ) : null}
    </FormControl>
  );
}
