import React from "react";
import { useField } from "formik";
import { Select, FormLabel, FormControl, FormErrorMessage } from "@chakra-ui/core";

const SelectInput = props => {
  const [field, meta] = useField(props);
  const { label = "", name, options } = props;

  return (
    <FormControl mb="1.5rem" isInvalid={Boolean(meta.touched && meta.error)}>
      {label ? <FormLabel htmlFor={name}>{label}</FormLabel> : null}

      <Select {...field} {...props}>
        {options.length > 0 &&
          options.map((_, i) => (
            <option value={_.value ?? _.code} key={`options-${i}`} id={name}>
              {_.label ?? _.name}
            </option>
          ))}
      </Select>

      {meta.touched && meta.error ? (
        <FormErrorMessage fontSize="md">{meta.error}</FormErrorMessage>
      ) : null}
    </FormControl>
  );
};

export default SelectInput;
