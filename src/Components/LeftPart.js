import React from "react";
import img2 from "../img2.jpg";
const LeftPart = () => {
  return (
    <div>
    <div className="ui cards" style={{ padding: "20px",width:'100%' }}>
      <div className="card" style={{ padding: "20px", borderRadius: "5px",width:'100%' }}>
        <div
          className="cardleftpart">
          <div className="content">
            <div>
              <h3>Service Details</h3>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    border: "solid",
                    borderRadius: "100%",
                    width: "auto",
                    backgroundColor: "black",
                  }}
                >
                  <i
                    className="dollar sign icon"
                    style={{ color: "white" }}
                  ></i>
                </div>
                &nbsp; Minimun Service Charge:0
              </div>
              <br />
              <div style={{ display: "flex" }}>
                <div>
                  <i className="calendar alternate outline icon"></i>
                </div>
                <b>Open Today</b>
              </div>
              <br />
              <div style={{ display: "flex" }}>
                <div>
                  <i className="female icon"></i>
                </div>
                Type of Customers:Men,
                <br /> Women,Children
              </div>
              <br />
              <div className="ui fitted divider"></div>
              <h3>Store Policies</h3>
              <a href="#">
                <u>Rescheduling and Cancellation</u>
              </a>
              <br />
              <br />
              <div className="ui fitted divider"></div>
            </div>
            <h3>Portfolio Images</h3>
            <img src={img2} alt="Avatar" style={{ width: "90px" }} /> <br />
            <br />
            <div className="ui fitted divider"></div>
            <h3>Gift Cards</h3>
            <button class="ui primary basic button">
              Show Gift Cards
            </button>
            <br />
            <br />
            <div className="ui fitted divider"></div>
            <h3>About The Store</h3>
            <p>Hi,Customers welcome to our store</p> <br />
            <div className="ui fitted divider"></div>
            <br />
            <i className="facebook square icon"></i>
            <i className="twitter icon"></i>
            <i className="linkedin icon"></i>
            <i className="instagram icon"></i>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LeftPart;
