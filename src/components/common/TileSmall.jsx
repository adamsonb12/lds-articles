import React, { Component } from 'react';

import { SmallVid, NewsRelease } from '../common';

const TileSmall = ({ tile, children }) => {
  return (
      <div className="smallTileContainer" style={styles.smallTileContainer}>
        <div className="vidContainer">
          <SmallVid image={tile.imageurl} />
        </div>
        <div className="infoContainer" style={styles.infoContainer}>
          <NewsRelease tile={tile} />
        </div>
      </div>
  );
};

const styles = {
  smallTileContainer: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: 1000,
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30
  },
  infoContainer: {
    paddingLeft: 35
  }
}

export { TileSmall };
