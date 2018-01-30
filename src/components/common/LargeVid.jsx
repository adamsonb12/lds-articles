import React, { Component } from 'react';

const LargeVid = ({ vid, children }) => {
  return (
    <div style={styles.vidContainerStyle}>
      <iframe width="100%" height="500" src={vid+"?&autoplay=1"} frameBorder="0"></iframe>
    </div>
  );
};

const styles = {
  vidContainerStyle: {
  }
}

export { LargeVid };
