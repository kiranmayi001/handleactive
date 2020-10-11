import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './style.css';
import Nav from './nav';

import VideoCard from './Components/Placecard/placecard';
import Arr from './VideoCardData';
import classes from './App.module.css';




// function App() {
class App extends React.Component{
state={
  currentCard:-1
}

handleActive=(id)=>{
this.setState({
  currentCard:id
})
}

 render(){
//  const mapCard=Arr.map((item)=>{
//   return  <div key={item.id} className={[item.id===this.state.currentCard ? classes.Active : null,classes.VCard].join(" ")} onClick={()=>this.handleActive(item.id)}> <VideoCard  thumbnail={item.thumbnail} title={item.title} /> </div>
//    })
const mapCard=Arr.map((item)=>{
  return  <div key={item.id} className={`${item.id===this.state.currentCard ? classes.Active : null} ${classes.VCard}`}
   onClick={()=>this.handleActive(item.id)}> <VideoCard  thumbnail={item.thumbnail} title={item.title} /> </div>
   })

  return (
    <div className="App">
    <Nav/>
    
   <div className={classes.Rowflex}>
    {mapCard}
</div>
    {/* <VideoCard/> */}
    </div>
  );
 }
}
// }

export default App;
