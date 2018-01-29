import React, { Component } from 'react';
import { connect } from 'react-redux';

class Tile extends Component {
  render() {
    console.log(this.props);
    return (
      <div>Tile</div>
    );
  }
}

const mapStateToProps = state => {
  return { tile: state.tile };
};

export default connect(mapStateToProps)(Tile);
