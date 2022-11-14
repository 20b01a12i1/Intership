import React,{useState} from "react";

const Reviews = () => {
    const [isactive1,setActive1] = useState(false);
    const [isactive2,setActive2] = useState(false);
    const [isactive3,setActive3] = useState(false);
    const active1 = event =>{
        setActive1(!isactive1);
      }
      const active2 = event =>{
        setActive2(!isactive2);
      }
      const active3 = event =>{
        setActive3(!isactive3);
      }
  return (
    <div>
        <div style={{ padding: "2%", borderRadius: "5px",width:"100%",height:'100%',display:'flex' }}>
          <div>
            {isactive1 ? (
              <button
                className="ui secondary button"
                style={{ borderRadius:'25px',height:'50px' }}
                onClick={active1}
              >
                Reviews Received
              </button>
            ) : (
              <button
                className="ui primary basic button"
                style={{ borderRadius:'25px',height:'50px'}}
                onClick={active1}
              >
                Reviews Received
              </button>
            )}
            {isactive2 ? (
              <button
                className="ui secondary button"
                style={{borderRadius:'25px',height:'50px'}}
                onClick={active2}
              >
                Pending Reviews
              </button>
            ) : (
              <button
                className="ui primary basic button"
                style={{ borderRadius:'25px',height:'50px'}}
                onClick={active2}
              >
                Pending Reviews
              </button>
            )}
            {isactive3 ? (
              <button
                className="ui secondary button"
                style={{  borderRadius:'25px',height:'50px'}}
                onClick={active3}
              >
                Reviews Given
              </button>
            ) : (
              <button
                className="ui primary basic button"
                style={{  borderRadius:'25px',height:'50px'}}
                onClick={active3}
              >
                Reviews Given
              </button>
            )}
          </div>
        </div>
      </div>
  );
};

export default Reviews;
