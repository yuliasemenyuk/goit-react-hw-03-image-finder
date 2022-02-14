import React, { Component } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import Modal from "./components/Modal/Modal";
import Loader from "./components/Loader/Loader";
import "./App.css";

class App extends Component {
  state = {
    showModal: false,
    images: null,
    // loading: false,
  };

  componentDidMount() {
    // this.setState({loading: true});

    fetch(
      "https://pixabay.com/api/?key=4549161-d9016794db06e42eaadc07c38/&q=flovers"
    )
      .then((res) => res.json())
      .then((images) => this.setState({ images }));
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal, images, loading } = this.state;

    return (
      <div>
        <Searchbar />
        {images && <>gallery will be here</>}
        {loading && <Loader />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src="" alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
