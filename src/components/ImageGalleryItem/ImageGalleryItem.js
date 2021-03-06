import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import style from "./ImageGalleryItem.module.css";

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const { webformatURL, tags, largeImageURL } = this.props;

    return (
      <li className={style.ImageGalleryItem}>
        <img
          className={style.ImageGalleryItem_image}
          onClick={this.toggleModal}
          src={webformatURL}
          alt={tags}
        />

        {showModal && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            onClose={this.toggleModal}
          />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
