import React from 'react'
// import { Link } from "react-router-dom";
import "./Orders.scss"

const Orders = () => {
  
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div className='orders'>
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
          {/* <Link to="/add">
          <button>Add New Gig</button>
          </Link> */}
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller? "Buyer":"Seller"}</th>  
            {/*isme uper current user ke badd wale ? pr doubt hai  */}
            <th>Contact</th>
          </tr>
          <tr>
            <td><img className='img' src="/projectCards/catCard_2.jpeg" alt="" /></td>
            <td>Stunning concept art</td>
            <td>59</td>
            <td>13</td>
            <td>
              <img className="delete" src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="/projectCards/catCard_2.jpeg"
                alt=""
              />
            </td>
            <td>Ai generated concept art</td>
            <td>120</td>
            <td>41</td>
            <td>
              <img className="delete" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="/projectCards/catCard_2.jpeg"
                alt=""
              />
            </td>
            <td>High quality digital character</td>
            <td>79</td>
            <td>55</td>
            <td>
              <img className="delete" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="/projectCards/catCard_2.jpeg"
                alt=""
              />
            </td>
            <td>Illustration hyper realistic painting</td>
            <td>119</td>
            <td>29</td>
            <td>
              <img className="delete" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="/projectCards/catCard_2.jpeg"
                alt=""
              />
            </td>
            <td>Original ai generated digital art</td>
            <td>59</td>
            <td>34</td>
            <td>
              <img className="delete" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="/projectCards/catCard_2.jpeg"
                alt=""
              />
            </td>
            <td>Text based ai generated art</td>
            <td>110</td>
            <td>16</td>
            <td>
              <img className="delete" src="./img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Orders