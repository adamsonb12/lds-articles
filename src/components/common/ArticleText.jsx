import React, { Component } from 'react';

const ArticleText = ({ text, children }) => {
  return (
    <div style={styles.articleContainerStyle}>
      <p style={styles.textStyle}>{text}</p>
    </div>
  );
};

const styles = {
  articleContainerStyle: {
  },
  textStyle: {
    fontWeight: '300'
  }
}

export { ArticleText };
