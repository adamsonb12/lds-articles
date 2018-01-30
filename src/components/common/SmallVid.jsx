import React, { Component } from 'react';

const SmallVid = ({ image, children }) => {
  return (
    <div style={styles.vidContainerStyle}>
      {/* <iframe width="280" height="156" src={vid} frameBorder="0" allow="autoplay; encrypted-media"></iframe> */}
      <img src={image} style={styles.imageStyle}/>
    </div>
  );
};

const styles = {
  vidContainerStyle: {
  },
  imageStyle: {
    width: 280,
    height: 156
  }
}

export { SmallVid };
