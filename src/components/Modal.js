import React from "react";
import { ModalWrapper, CloseButton } from "assets/styles/SiteTheme";
import FormContainer from "components/FormContainer";

const Modal = props => {
  return props.showModal ? (
    <ModalWrapper showModal={props.showModal} className="modal">
      <CloseButton onClick={props.endEdit}>&#x2718;</CloseButton>
      <FormContainer {...props} />
    </ModalWrapper>
  ) : null;
};

export default Modal;
