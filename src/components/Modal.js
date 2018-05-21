import React from "react";
import { ModalWrapper, CloseButton } from "assets/styles/SiteTheme";

import EditTask from "containers/EditTask";

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.item ? (
      <ModalWrapper className="modal" showModal={this.props.showModal}>
        <CloseButton onClick={this.props.handleClick}>&#x2718;</CloseButton>
        <EditTask handleClick={this.props.handleClick} item={this.props.item} />
      </ModalWrapper>
    ) : null;
  }
}

export default Modal;
