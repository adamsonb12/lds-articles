import React, { Component } from 'react';

import { LargeVid, NewsRelease } from '../common';

const TileSelected = ({ tile, children }) => {
  return (
      <div className="smallTileContainer" style={styles.smallTileContainer}>
        <div className="vidContainer">
          <LargeVid vid={tile.videourl} />
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
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: 30,
    maxWidth: 1000,
    paddingLeft: 30,
    paddingRight: 30
  },
  infoContainer: {
    paddingTop: 15
  }
}

export { TileSelected };
