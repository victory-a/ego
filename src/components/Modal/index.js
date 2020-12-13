import React from "react";
import { IoIosClose } from "react-icons/io";

import { Modal, ModalOverlay, ModalContent, ModalBody, SlideIn } from "@chakra-ui/core";

import { CloseButton, ModalTitle } from "./styles";

const CustomModal = ({
  isOpen,
  onClose,
  children,
  showCloseBtn = true,
  overlayClose = false,
  size,
  type = "padded",
  title = "",
  isCentered = true,
  // initialFocusRef=null,
  ...props
}) => {
  // const ref={focusRef}
  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  return (
    <SlideIn in={isOpen}>
      {() => (
        <Modal
          isOpen={isOpen}
          size={size}
          isCentered={isCentered}
          closeOnOverlayClick={overlayClose}
          onClose={onClose}
          initialFocusRef={props.initialFocusRef ?? null}
          {...props}
        >
          <ModalOverlay bg="rgba(99,99,98, .8)" />
          <ModalContent borderRadius={type === "padded" ? 12 : 0}>
            {showCloseBtn && (
              <CloseButton
                type="button"
                onClick={onClose}
                aria-label="Close Modal"
                aria-labelledby="close-modal"
              >
                <IoIosClose size={27} />
              </CloseButton>
            )}
            <ModalTitle>{title}</ModalTitle>
            <ModalBody padding="2.5rem">{children}</ModalBody>
          </ModalContent>
        </Modal>
      )}
    </SlideIn>
  );
};

export default CustomModal;
