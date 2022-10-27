import React from "react";

const Card = ({ items }) => {
  return (
    <div>
      <div className="ui card">
        <div className="content" >
          <div className="header">{items.secondaryServiceName}</div>
        </div>
        <div className="content">
          <h4 className="ui sub header">id:{items.id}</h4>
          <div className="ui small feed">
            <div className="event">
              <div className="content"> 
                <div className="summary">
                  price:<a>{items.Variations[0].price}</a>
                </div>
              </div>
            </div>
            <div className="event">
              <div className="content">
                <div className="summary">
                  Service ID:
                  <p>{items.ServiceTypeRelations[0].serviceTypeId}</p>
                  <br />
                  <a>{items.servicePictures[0].s3URL}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <p>{items.id}:{items.secondaryServiceName}</p> */}
      {/* <p>{items.id}:{items.title}</p> */}
    </div>
  );
};

export default Card;
