import React from 'react'
import img2 from "./img2.jpg";
const Card2 = ({ items, addItem, handleClick, handlechange }) => {
  return (
    <div style={{width:'100%'}}>
      <div className="card">
      <div className="image" style={{width:'200px'}}>
        <img src={img2} alt="right floated mini ui image" />
      </div>
      <div className='content' style={{padding:'30px'}}>
      <div style={{display:'flex'}}>
        <div>
        <h3>{items.secondaryServiceName}</h3>
        </div>
          <div>
              <button onClick={() => addItem(items.id)} className="btn">
              {items.istoggle ? (
                <i className="ui blue heart icon"></i>
              ) : (
                <i className="heart icon"></i>
              )}
            </button>  
          </div>
        </div>

        <p>{items.primaryServiceName}</p>
        <p>
          It is a long establlished fact that a reader will be distracted by the
          <br />
          readable content of a page when looking at its layout.
        </p>
        <div>
          <h4 id="price" style={{ float: "left" }}>
            $R {items.Variations[0].price}.00
          </h4>
        </div>
        <br />
        <br />
        <div style={{display:'flex'}}>
          {/* <span><strong>choose:</strong></span> */}
          <span><strong>ID:</strong></span>
          <div style={{border:'solid',borderRadius:'20px',width:'50px',backgroundColor:'black',color:'white',marginRight:'10px'}}> 
            <center>
            <p style={{padding:'5px'}}>{items.Variations[0].price}</p>
            </center>
          </div>
          <span style={{color:'GrayText',marginRight:'20px'}}>160 g</span>&nbsp;
          <div style={{width:'150px'}}>
            <select onChange={handlechange} style={{borderRadius:'20px',height:'30px',padding:'6px'}}>
              {/* <option value="">select Type</option> */}
              {items.ServiceTypeRelations?.map((option, index) => (
                <option value={option.serviceTypeId}>
                  {option.ServiceType.name.en}
                </option>
              ))}
            </select>
          </div>
          {/* <span><strong>Select:</strong></span> */}
          <div style={{width:'150px'}}>
            <select onChange={handlechange} style={{borderRadius:'20px',height:'30px',padding:'6px'}}>
              {/* <option value="">select</option> */}
              {items.ServiceTypeRelations?.map((option, index) => (
                <option value={option.serviceTypeId}>
                  {option.ServiceType.name.en}
                </option>
              ))}
            </select>
          </div>
          <div style={{position:'absolute',right:6}}>
          {items.isClicked ? 
          <button className="ui button" 
            style={{borderRadius:'20px',color:'lightblue',backgroundColor:'white',borderColor:'lightblue',border:'solid'}} 
            onClick={() => handleClick(items.id)}>
              Remove
            </button> : 
            <button className="ui primary button" 
            style={{borderRadius:'20px'}} 
            onClick={() => handleClick(items.id)}>
              Add
            </button>}
          </div> 
        </div>
      </div>
    </div>
</div>
  )
}

export default Card2
