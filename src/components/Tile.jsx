import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TileSmall, TileSelected } from './common';

class Tile extends Component {

  state = {
    tileSelected: false
  }

  renderContent() {
    if(this.state.tileSelected) {
      return (
        <TileSelected tile={this.props.tile} />
      );
    }
    return;
  }

  changeSelected() {
    this.setState({ tileSelected: true });
  }

  render() {
    return (
      <div style={styles.containerStyle}>
        <div onClick={this.changeSelected.bind(this)} >
          <TileSmall tile={this.props.tile}/>
        </div>
        {this.renderContent()}
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const mapStateToProps = state => {
  return { tile: state.tile };
};

export default connect(mapStateToProps)(Tile);
