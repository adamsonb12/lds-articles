import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TileSmall } from './common';

class Tile extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <TileSmall tile={this.props.tile}></TileSmall>
        <div className="sectionBottom">Tile</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { tile: state.tile };
};

export default connect(mapStateToProps)(Tile);
