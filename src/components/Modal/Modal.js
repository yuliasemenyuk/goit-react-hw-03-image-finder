import React, { Component } from "react";
import { createPortal } from "react-dom";
import style from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  // eslint-disable-next-line react/require-render-return
  render() {
    return createPortal(
      <div className={style.overlay} onClick={this.handleOverlayClick}>
        <div className={style.modal}>
          {this.props.children}
          <img src="" alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
