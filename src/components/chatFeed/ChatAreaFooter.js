import React from 'react'
import {BiVideo,BiLike} from 'react-icons/bi'
import {HiOutlinePhotograph} from 'react-icons/hi'
import {IoAddCircleOutline} from 'react-icons/io5'
import {RiAttachment2} from 'react-icons/ri'
import {VscSmiley} from 'react-icons/vsc'

const ChatAreaFooter = () => {
  return (
    <div className="chat-area-footer">
        <div className='chat-footer-icon'>
            <BiVideo />
        </div>            
        <div className='chat-footer-icon'>
            <HiOutlinePhotograph />
        </div>            
        <div className='chat-footer-icon'>
            <IoAddCircleOutline />
        </div>            
        <div className='chat-footer-icon'>
            <RiAttachment2 />
        </div>            
        <input type="text" placeholder="Type something here..." />
        <div className='chat-footer-icon'>
            <VscSmiley />
        </div>            
        <div className='chat-footer-icon'>
            <BiLike />
        </div>            
    </div>
  )
}

export default ChatAreaFooter
