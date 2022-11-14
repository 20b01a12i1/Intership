import React from 'react'
import img2 from "../img2.jpg";
const ShoppingCart = () => {
  return (
    <div>
      <div className='ui card' style={{width:'100%',padding:'10px',height:'250px'}}>
         <h3>Shopping Cart</h3>
         <div style={{display:'flex'}}>
         <div style={{width:'100px'}}>
         <img className='image2' src={img2} style={{borderRadius:'100%',width:'80%'}}/>
         </div>
         <div>
         <b> Freelancer Test </b><br /> by <b> Freelancer Store</b><br />
         <input type="number" style={{width:'25%',borderRadius:'39%'}}/>
         <p>Booking Date & Time: <b>--</b></p>
         <p>Duration: <b>60 Minutes</b></p>
         </div>
         <div>
          <p>&nbsp;</p><br />
          <p>Service type:....</p>
          <p>Allowed to Book Time: <b>15 Minutes</b></p>
         </div>
         <div style={{marginLeft:'20px',marginTop:'10px'}}>
          <h3>SR 50.00</h3>
          <br />
         <i className="ui red trash icon"></i>
         </div>
         </div>
      </div>
    </div>
  )
}

export default ShoppingCart
