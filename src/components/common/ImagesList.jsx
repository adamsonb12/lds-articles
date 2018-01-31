import React, { Component } from 'react';

import Thumbnail from './Thumbnail';

const ImagesList = ({ article, children }) => {
  const listItems = article.images.map((image) => 
    <Thumbnail img={image} key={image.imageurl} />
  );
  return (
    <div style={styles.listContainerStyle}>
      {listItems}
    </div>
  );
};

const styles = {
  listContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  imageStyle: {
    width: 280,
    height: 156
  }
}

export { ImagesList };
