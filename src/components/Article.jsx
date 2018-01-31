import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArticleImages from './common/ArticleImages';
import { ArticleText } from './common';

class Article extends Component {
  render() {
    console.log(this.props);
    return (
      <div style={styles.articleContainerStyle}>
        <span style={styles.subtitleStyle}>{this.props.article.subtitle}</span>
        <span style={styles.titleStyle}>{this.props.article.title}</span>
        <ArticleImages article={this.props.article} />
        <ArticleText text={this.props.article.articleText} />
      </div>      
    );
  }
}

const styles = {
  articleContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: 150,
    paddingRight: 150,
    paddingTop: 100,
    paddingBottom: 100
  },
  subtitleStyle: {
    fontSize: 16,
    fontWeight: '200',
    alignSelf: 'flex-start'
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: '300',
    paddingTop: 4,
    paddingBottom: 10,
    alignSelf: 'flex-start'
  }
}

const mapStateToProps = state => {
  return { article: state.article };
};

export default connect(mapStateToProps)(Article);
