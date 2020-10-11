import React from 'react';
import classes from './placecard.module.css';


 function VideoCard(props){

  return (
    <div className="App">
      <div className={classes.cards}>
      <div className={classes.card}>
     <img src={props.thumbnail} alt="video thumbnail"></img>
     <p>{props.title}</p>
  </div>
  </div>
  </div>
  );
}

export default VideoCard;
// export default Title;
