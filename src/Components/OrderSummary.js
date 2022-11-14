import React from 'react'

const OrderSummary = () => {
  return (
    <div>
      <div className='ui card'>
        <div style={{padding:'2px'}}>
            <h3>Order Summary</h3>
            <table>
                <tr>
                    <td><h4>Freelancer Test</h4></td>
                    <td><h4>SR 50.00</h4></td>
                </tr>
                <tr>
                    <td>Qty:1</td>
                </tr><br />
                <div className="ui fitted divider"></div><br />
                <tr>
                    <td><h3>Sub Total</h3></td>
                    <td><h3>SR 50.00</h3></td>
                </tr><br />
                <div className="ui fitted divider"></div><br />
                <tr>
                    <td>Have a Gift Card Number</td>
                </tr><br />
                <tr>
                    <td>
                        <div className="ui input focus">
                        <input type="text"/>
                        </div>
                    </td>
                    <td><button className="ui yellow button">Yellow</button></td>
                </tr>
                <div className="ui cleared divider"></div>
                
            </table>
            <button className="ui primary button" style={{width:'100%'}}>Proceed To CheckOut</button>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
