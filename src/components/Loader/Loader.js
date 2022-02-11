import React, { Component } from "react";

class Loader extends Component {
  state = {
    images: [],
    isLoading: false,
  };

  // async componentDidMount() {
  //   this.setState({ isLoading: true });
  //   const response = await axios.get("/search?query=react");
  //   this.setState({
  //     articles: response.data.hits,
  //     isLoading: false,
  //   });
  // }

  // render() {
  //     const { articles, isLoading } = this.state;
  //     return (
  //       <div>
  //         isLoading ? <p>Loading...</p> : <ArticleList articles={articles} />
  //       </div>
  //     );
  //   }
}

export default Loader;
