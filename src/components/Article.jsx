import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArticleImages from './common/ArticleImages';
import ArticleText from './common/ArticleText';
import { ArticleVid } from './common';

class Article extends Component {

  render() {
    const textItems = this.props.article.articleText.map((textItem) => 
      <ArticleText textItem={textItem} key={textItem.text}/>
    );
    return (
      <div style={styles.articleContainerStyle}>
        <span style={styles.subtitleStyle}>{this.props.article.subtitle}</span>
        <span style={styles.titleStyle}>{this.props.article.title}</span>
        <ArticleImages article={this.props.article} />
        <div style={styles.articleContentStyle}>
          <div style={styles.articleTextContainerStyle}>
            {textItems}
          </div>
          <div style={styles.artileVidStyle}>
            <ArticleVid article={this.props} />
          </div>
        </div>
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
    paddingTop: 20,
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
  },
  articleTextContainerStyle: {
    paddingTop: 10,
    paddingRight: 20
  },
  artileVidStyle: {
    alignSelf: 'center'
  },
  articleContentStyle: {
    display: 'flex',
    flexDirection: 'row'
  }
}

const mapStateToProps = state => {
  return { article: state.article };
};

export default connect(mapStateToProps)(Article);
