import React,{useState} from "react";
import Cart from "./Components/Cart";
import LeftPart from "./Components/LeftPart";
import Data from "./Data";
import Reviews from "./Components/Reviews";
import img6 from "./img6.jpg";
import ReviewsSelf from "./Components/ReviewsSelf";
import ReviewsCom from './Components/ReviwesCom';
import './card.css'
const Page1 = () => {
  
  return (
    <div style={{overflow: 'auto'}}>
    <div style={{height:'500px',width:'100%'}}>
        <div style={{height:'400px'}}>
        <img src={img6} alt="Avatar" style={{width:'100%', height:'250px'}} /> <br />
        </div>  
      <div style={{display:'flex',width:'100px', overflow: 'auto',}}>
        <div style={{position:'absolute',left:10,top:250,width:'18%'}}>
          <LeftPart />
        </div>
        <div style={{position:'absolute',left:'25%',top:250}}>
          <h3>FreeLancer</h3>
            <div className="ui right aligned category search">
            <div className="ui icon input">
            <i className="search icon"></i>
              <input className="prompt" type="text" placeholder="Search..."/> 
            </div>
          </div><br />
        </div>
        <div style={{position:'absolute',left:'25%',top:380}}>
            <Data/>
        </div>
        <div style={{position:'absolute',width:'50%',right:-450,top:380}}>
        <Cart />
        </div>
      </div>
      <div className="ui card" style={{position:'absolute',top:750,left:'25%',width:'73%',height:'250px'}}>
        <div >
          <Reviews/>
          <div style={{position:'absolute',top:65,left:1,width:'100%',display:'flex'}}>
        <div style={{position:'absolute',left:5,width:'20%'}}>
        <ReviewsSelf/>
        </div>
        <div style={{position:'absolute',left:'25%',width:'70%'}}>
        <ReviewsCom/>
        </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Page1;
