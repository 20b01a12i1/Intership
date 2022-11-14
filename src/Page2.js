import React from 'react';
import MenuVertical from './Components/MenuVertical';
import OrderSummary from './Components/OrderSummary';
import ClearCart from './Components/ClearCart';
import ShoppingCart from './Components/ShoppingCart';
const Page2 = () => {
  return (
    <div style={{width:'120%'}}>  
      <div style={{display:'flex',position:'relative'}}>
        <div style={{position:'absolute',left:0,width:'500px',height:'100%'}}><MenuVertical/></div>
        <div>
          <div style={{position:'absolute',left:180,width:'50%'}}>
          <ShoppingCart/>
          <div style={{position:'absolute',left:10,marginTop:'4px',width:'100%'}}>
          <button className="ui primary basic button" style={{width:'50%'}}><i class="calendar alternate outline icon"></i>Select Booking Date and Time</button>
          <button className="ui primary basic button" style={{width:'48%'}}><i class="calendar plus outline icon"></i>Add Another Service</button>
          </div>
          </div>
        </div>
        <div style={{position:'absolute',left:1100,marginTop:'4px',width:'100%'}}>
          <div>
          <ClearCart/>
          </div>
          <div style={{marginTop:'10px',width:'500px'}}>
            <OrderSummary/>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default Page2
