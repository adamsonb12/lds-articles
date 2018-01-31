import React, { Component } from 'react';

const ArticleVid = ({ article, children }) => {
  return (
    <div style={styles.vidContainerStyle}>
      <iframe width="280" height="156" src={article.article.videourl} frameBorder="0" allow="autoplay; encrypted-media"></iframe>
      <div style={styles.descriptionConatinerStyle}>
        <span style={styles.titleStyle}>{article.article.title}</span>
        <span style={styles.captionStyle}>{article.article.videoCaption}</span>
      </div>
    </div>
  );
};

const styles = {
  vidContainerStyle: {
    borderBottomWidth: 1,
    borderColor: 'black',
    borderBottomStyle: 'solid'
  },
  imageStyle: {
    width: 280,
    height: 156
  },
  descriptionConatinerStyle: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 3,
    paddingBottom: 3
  },
  titleStyle: {
    fontWeight: '400'
  },
  captionStyle: {
    fontWeight: '200'
  }
}

export { ArticleVid };
