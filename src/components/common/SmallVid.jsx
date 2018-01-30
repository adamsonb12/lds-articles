import React, { Component } from 'react';

const SmallVid = ({ vid, children }) => {
  return (
    <div style={styles.vidContainerStyle}>
      <iframe width="280" height="156" src={vid} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
    </div>
  );
};

const styles = {
  vidContainerStyle: {
  }
}

export { SmallVid };
