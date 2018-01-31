import React, { Component } from 'react';

// const ArticleText = ({ textItem, children }) => {
class ArticleText extends Component {
  constructor(props) {
    super(props);
  }

  renderContent() {
    if(this.props.textItem.heading) {
      return <p style={styles.headingStyle}>{this.props.textItem.text}</p>;
    }
    return <p style={styles.textStyle}>{this.props.textItem.text}</p>;
  }

  render() {
    return (
      <div style={styles.articleContainerStyle}>
        {this.renderContent()}
      </div>
    );
  }
}

const styles = {
  articleContainerStyle: {
  },
  textStyle: {
    fontWeight: '200'
  },
  headingStyle: {
    fontSize: 30,
    fontWeight: '300'
  }
}

export default ArticleText;
