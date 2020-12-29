import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialogOverlay,
  Button
} from "@chakra-ui/core";

const Alert = ({
  isOpen,
  onClose,
  cleanup = null,
  onConfirm,
  type = "padded",
  title = "",
  children,
  ...props
}) => {
  const cancelRef = React.useRef();

  return (
    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose} {...props}>
      <AlertDialogOverlay />
      <AlertDialogContent borderRadius={type === "padded" ? 12 : 0}>
        <AlertDialogHeader fontSize="2rem" fontWeight="bold">
          {title}
        </AlertDialogHeader>
        <AlertDialogBody padding="1.5rem" fontSize="1.6rem">
          {children}
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button
            ref={cancelRef}
            onClick={() => {
              cleanup();
              onClose();
            }}
            height="3rem"
          >
            Cancel
          </Button>
          <Button
            variantColor="red"
            onClick={() => {
              cleanup();
              onConfirm();
              onClose();
            }}
            ml={5}
            height="3rem"
          >
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Alert;
