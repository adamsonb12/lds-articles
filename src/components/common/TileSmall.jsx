import React, { Component } from 'react';

import { SmallVid, NewsRelease } from '../common';

const TileSmall = ({ tile, children }) => {
  return (
      <div className="smallTileContainer" style={styles.smallTileContainer}>
        <div className="vidContainer">
          <SmallVid vid={tile.videourl} />
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
    justifyContent: 'flex-start',
    paddingLeft: 75,
    paddingRight: 75,
    paddingTop: 30,
  },
  infoContainer: {
    paddingLeft: 35
  }
}

export { TileSmall };
