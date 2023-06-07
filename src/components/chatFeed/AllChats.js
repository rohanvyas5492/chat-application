import React, { useState } from 'react'
import SingleChat from './SingleChat'
import chats from './chats'
import {BiGroup} from 'react-icons/bi'
import ChatNavbar from './ChatNavbar'

const AllChats = () => {

  return (
   <div className="conversation-area">
   <ChatNavbar />
                <div className="msg active">
                    <div className="msg-profile group">
                        <BiGroup />
                    </div>
                    <div className="msg-detail">
                        <div className="msg-username">Friends Group</div>
                        <div className="msg-content">
                            <span className="msg-message">Rohan: How is everyone.?</span>
                            <span className="msg-date">28m</span>
                        </div>
                    </div>
                </div>
                {chats.map((chat)=>{
                    return <SingleChat key={chat.id} {...chat}/>
                })}
                <button className="add"></button>
                <div className="overlay"></div>
            </div>
  )
}

export default AllChats
