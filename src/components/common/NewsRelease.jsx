import React, { Component } from 'react';

const NewsRelease = ({ tile, children }) => {
  return (
      <div style={styles.containerStyle}>
        <span style={styles.newsRelease}>News Release</span>
        <span style={styles.titleStyle}>{tile.title}</span>
        <span style={styles.descriptionStyle}>{tile.description}</span>
      </div>
  );
};

const styles = {
  containerStyle: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  newsRelease: {
    color: '#ADD8E6',
    fontSize: 16,
    paddingBottom: 3
  },
  titleStyle: {
    fontSize: 32,
    paddingBottom: 7
  },
  descriptionStyle: {
    fontSize: 14
  }
}

export { NewsRelease };
