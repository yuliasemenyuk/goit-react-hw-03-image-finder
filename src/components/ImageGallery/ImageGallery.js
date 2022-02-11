import React, { Component } from "react";
import axios from "axios";

axios.defaults.baseURL =
  "https://pixabay.com/api/24549161-d9016794db06e42eaadc07c38";

const ImageList = ({ images }) => (
  <ul>
    {/* {images.map(({ objectID, url, title }) => (
        <li key={objectID}>
          <a href={url} target="_blank" rel="noreferrer noopener">
            {title}
          </a>
        </li>
      ))} */}
  </ul>
);

class ImageGallery extends Component {
  state = {
    images: [],
  };
}

export default ImageGallery;
