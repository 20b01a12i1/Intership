import React from 'react'

const demo2 = () => {
  return (
    <div>
      <div className='ui card' style={{ padding: "20px",width:'100%' }}>
        <div>
        <h3>Reviews For Sumit</h3>
            <div className="ui star rating">
              <i className="active icon"></i>
              <i className="active icon"></i>
              <i className="active icon"></i>
              <i className="active icon"></i>
              <i className="active icon"></i>4.7(3)
            </div><br />
            Complted Orders:8 <br />
        </div>
        <div>
        <div className="ui checkbox">
                <table style={{width:'auto'}}>
                    <tr>
                        <td>
                        <input type="checkbox" name="example"/>
                        <label>5 Stars</label>
                        </td>
                        <td>
                        <input type="checkbox" name="example"/>
                        <label>4 Stars</label>
                        </td>
                    </tr>
                    <tr>
                    <td>
                        <input type="checkbox" name="example"/>
                        <label>3 Stars</label>
                        </td>
                        <td>
                        <input type="checkbox" name="example"/>
                        <label>2 Stars</label>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default demo2
