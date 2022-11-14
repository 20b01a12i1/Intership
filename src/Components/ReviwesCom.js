import React from "react";

const demo = () => {
  return (
    <div>
      <div
        style={{
          left: 0,
          top: 50,
          borderRadius: "50%",
        }}
      >
        <div className="ui card" style={{width:'100%'}}>
          <div
            className="content"
            style={{
              left: 0,
              top: 80,
              borderRadius: "50%",
              display:'flex'
            }}
          >
            <div style={{width:'15%',paddingTop:'20px'}}>
            <i className="users icon"></i>
            </div>  
            <div>
            <h3>&nbsp; FreeLancer Store</h3>
            <div className="ui star rating">
              <i className="active icon"></i>
              <i className="active icon"></i>
              <i className="active icon"></i>
              <i className="active icon"></i>
              <i className="active icon"></i>(5)
            </div><br />
            <p>Nice</p>
            msdbx,dfkjbmsdbx,dfkjbmsdbx,dfkjbmsdbx,dfkjb
            <div class="ui fitted divider"></div>
            </div> 
        </div>
        </div>
      </div>
    </div>
  );
};

export default demo;
