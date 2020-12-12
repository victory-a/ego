import { useToast } from "@chakra-ui/core";

const useCustomToast = () => {
  const toast = useToast();

  const doToast = (
    title = "Successful!",
    description = "Operation successful!",
    status = "success",
    position = "bottom",
    duration = 2000,
    isClosable = true
  ) => toast({ position, title, description, status, duration, isClosable });

  return { doToast };
};

export default useCustomToast;
