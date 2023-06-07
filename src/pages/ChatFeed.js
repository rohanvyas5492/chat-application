import React from 'react'
import AllChats from '../components/chatFeed/AllChats'
import ChatDetails from '../components/chatFeed/ChatDetails'
import ChatMain from '../components/chatFeed/ChatMain'
import '../assets/sass/chatFeed.scss';

const ChatFeed = () => {
  return (
  <>
  <div className='app'>
    <section id='chat-feed' className='wrapper'>
        <AllChats />
        <ChatMain />
        <ChatDetails />
    </section>
  </div>
    </>
  )
}

export default ChatFeed
