import React, { Component } from 'react';
import { connect } from 'react-redux';

class Article extends Component {
  render() {
    console.log(this.props);
    return (
      <div>Article</div>
    );
  }
}

const mapStateToProps = state => {
  return { article: state.article };
};

export default connect(mapStateToProps)(Article);
