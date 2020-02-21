import React from 'react';

import "./border.css";


const Photo = props => {
  console.log(props, " photo props")
  return (
    <div className="border">
      <img src={props.src} className="img" alt="Space"></img>
    </div>
  );
};


export default Photo;