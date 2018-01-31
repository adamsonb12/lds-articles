import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectPicture } from '../../actions';

class Thumbnail extends Component {

  constructor(props) {
    super(props);
  }

  onSelectImage() {
    this.props.selectPicture(this.props.img);
  }

  render() {
    return (
      <div style={styles.imageContainerStyle}>
        <img style={styles.imageStyle} src={this.props.img.imageurl} onClick={this.onSelectImage.bind(this)}/>
      </div>
    );
  }
}

const styles = {
  imageContainerStyle: {
    paddingLeft: 5
  },
  imageStyle: {
    width: 50,
    height: 50,
    objectFit: 'cover'
  }
}

const mapStateToProps = ({image}) => {
  const { selectedImage } = image.selectedImage
  return { selectedImage };
}

export default connect(mapStateToProps, { selectPicture })(Thumbnail);
