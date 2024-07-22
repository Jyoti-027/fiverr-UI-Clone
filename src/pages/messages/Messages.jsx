import React from 'react'
import { Link } from "react-router-dom";
import "./Messages.scss"

const Messages = () => {
  
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const message= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi velit repellendus corporis esse incidunt cupiditate sint consequuntur eveniet omnis dolorum, ullam sequi explicabo iure est dolores saepe. Placeat, obcaecati possimus?'

  return (
    <div className='messages'>
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
          {/* <Link to="/add">
          <button>Add New Gig</button>
          </Link> */}
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>Charley Sharp</td>
            <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
            <td>1 hour ago</td>
            <td><button>Mark as Read</button></td>
          </tr>
          <tr className="active">
            <td>John Doe</td>
            <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
            <td>3 hours ago</td>
            <td><button>Mark as Read</button></td>
          </tr>
          <tr>
            <td>Elinor Good</td>
            <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>Garner David</td>
            <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
            <td>2 day ago</td>
          </tr>
          <tr>
            <td>Troy Oliver</td>
            <td><Link to="/message/123" className="link">{message.substring(0,100)}...</Link></td>
            <td>1 week ago</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Messages