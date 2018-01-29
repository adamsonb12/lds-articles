import React, { Component } from 'react';

// class TileSmall extends Component {
//   render(data) {
//     return (

//     );
//   }
// }

const TileSmall = ({ tile, children }) => {
  return (
      <div>
        <p>{tile.title}</p>
      </div>
  );
};

export { TileSmall };