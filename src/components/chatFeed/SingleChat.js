import React from 'react'

const SingleChat = ({id,dp,name,msgDate,msg}) => {
  return (
    <div className="msg online">
        <img className="msg-profile" src={dp} alt={name} />
        <div className="msg-detail">
            <div className="msg-username">{name}</div>
            <div className="msg-content">
                <span className="msg-message">{msg}</span>
                <span className="msg-date">{msgDate}</span>
            </div>
        </div>
    </div>
  )
}

export default SingleChat
