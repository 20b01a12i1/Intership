import React from "react";

const Cart = () => {
  return (
    <div className="cart">
      <div className="card" style={{position:'relative',borderTopLeftRadius:'15px',borderTopRightRadius:'15px' }}>
        <div className="content" style={{ width: "100%" }}>
          <div>
          <div className="ui primary button" style={{ width: "100%" }}>
            Order Value
          </div><br /><br />
          </div>
          <div className="meta" style={{padding:'10px'}}>
           <h3>FreeLancer Test:</h3> 
           <h4>Allowed to book Time</h4>
           <p><b>Minutes</b></p>
           <table>
            <tr>
                <td><input type="number" style={{width:'20%',borderRadius:'20px'}}/></td>
                <td><b>SR 50.00</b></td>
            </tr>
           </table>
            </div>
        </div>
      </div>
      <div style={{ marginTop:'1.5%' }}>
          <button className="ui primary button" style={{ width: "100%" }}>
            Continue To Cart
          </button>
        </div>
    </div>
  );
};

export default Cart;
