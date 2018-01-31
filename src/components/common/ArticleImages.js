import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ImagesList } from '../common';
import { selectPicture } from '../../actions';

class ArticleImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImageTitle: props.article.images[0].title,
      selectedImageCaption: props.article.images[0].caption
    }
  }

  render() {
    return (
      <div style={styles.mainContainerStyle}>
        <img src={this.props.selectedImage.imageurl} style={styles.imageStyle}/> {/* Might have to fix this*/}
        <div style={styles.imageDetailContainerStyle}>
          <div style={styles.imageDetailsStyle}>
            <span style={styles.titleStyle}>{this.state.selectedImageTitle}</span>
            <span style={styles.captionStyle}>{this.state.selectedImageCaption}</span>
          </div>
          <ImagesList article={this.props.article} />
        </div>
      </div>
    );
  }
}

const styles = {
  mainContainerStyle: {
    alignSelf: 'flex-start'
  },
  imageStyle: {
    width: '100%'
  },
  imageDetailContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageDetailsStyle: {
    display: 'flex',
    flexDirection: 'column'
  },
  titleStyle: {
    fontWeight: '500'
  },
  captionStyle: {
    fontWeight: '300'
  }
}

const mapStateToProps = ({ image }) => {
  const selectedImage = image.selectedImage;
  return { selectedImage };
}

export default connect(mapStateToProps, { selectPicture })(ArticleImages);
