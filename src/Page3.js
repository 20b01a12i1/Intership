import React from "react";
import Cart from "./Components/Cart";
import LeftPart from "./Components/LeftPart";
import Data from "./Data";
import Reviews from "./Components/Reviews";
import img6 from "./img6.jpg";
import ReviewsSelf from "./Components/ReviewsSelf";
import ReviewsCom from './Components/ReviwesCom';

const Page3 = () => {
  return (
    <div >
      <div className="containerMain">
        <main>
            <section>
                <div style={{padding:'30px'}}>
                <img src={img6} alt="Avatar" style={{width:'100%', height:'250px'}} /> <br />
                </div>
            </section>
            <div className="container">
                <div className="leftpart" >
                    <div style={{width:'100%'}}>
                        <LeftPart/>
                    </div>
                </div>
                <div className="content1">
                    <div className="cont">
                        <h2>FreeLancer Store</h2>
                        <div>
                            <div className="ui right aligned category search">
                                <div className="ui icon input">
                                <i className="search icon"></i>
                                <input className="prompt" type="text" placeholder="Search..." /> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content2">
                        <div className="data">
                            <Data/>
                        </div>
                        <div className="cart">
                            <Cart/>
                        </div>
                    </div>
                <div className="ui cards" id="content3">
                    <div className="card" style={{width:'100%'}}>
                        <div style={{width:'100%'}}>
                            
                            <Reviews/>
                               
                        </div>
                        <div>
                            <div className="content4" style={{width:'100%'}}>
                                <div className="self" style={{padding:'30px'}}>
                                    <ReviewsSelf/>
                                </div>
                                <div className="com" style={{width:'100%',padding:'30px'}}>
                                    <ReviewsCom/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </main>
      </div>
    </div>
  )
}

export default Page3
