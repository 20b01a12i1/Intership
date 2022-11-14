import React from "react";
import img2 from "./img2.jpg";
const Card = ({ items, addItem, handleClick, handlechange }) => {
  return (
    <div style={{width:'100%',paddingBottom:'20px',paddingLeft:'10px',paddingRight:'10px'}}>
      <div className="card" style={{width:'100%'}}>
        <div className="carddata">
          <div className="image">
            <img src={img2} alt="Avatar" />
          </div>
          <div className="cardcontent">
            <div className="ContainerCard">
              <div>
                <h3>{items.secondaryServiceName}</h3>
              </div>
              <p>{items.primaryServiceName}</p>
              <div>
                <h4 id="price" style={{ float: "left" }}>
                  $R {items.Variations[0].price}.00
                </h4>
              </div>
              <br />
              <div style={{ display: "flex" }}>
                <span><strong>choose:</strong></span>
                <div style={{ width: "150px" }}>
                  <select onChange={handlechange} disabled>
                    <option value="">select Type</option>
                    {items.ServiceTypeRelations?.map((option, index) => (
                      <option value={option.serviceTypeId}>
                        {option.ServiceType.name.en}
                      </option>
                    ))}
                  </select>
                </div>
                <span><strong> Select:</strong></span>
                <div style={{ width: "150px" }}>
                  <select onChange={handlechange} disabled>
                    <option value="">select</option>
                    {items.ServiceTypeRelations?.map((option, index) => (
                      <option value={option.serviceTypeId}>
                        {option.ServiceType.name.en}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="hoursandminutes" style={{ display: "grid" }}>
                {items.Variations[0].VariationProperties?.map((option) => (
                  <div style={{ display: "flex" }}>
                    <span>
                      <strong>{option.key}:</strong>
                    </span>
                    <span>{option.value}</span>
                  </div>
                ))}
              </div>
              <div className="buttonclass1">
                <div style={{ display: "grid" }}>
                  <div style={{ width: "150px", display: "flex" }}></div>
                  <div style={{ width: "150px", display: "flex" }}></div>
                </div>
                <div className="buttonclass" style={{ width: "100%" }}>
                  <button
                    className="ui primary button"
                    style={{ width: "100%" }}
                    onClick={() => handleClick(items.id)}
                  >
                    {items.isClicked ? "Remove" : "Add"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
