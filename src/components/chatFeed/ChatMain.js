import React from 'react'
import chat from '../../assets/images/chat.jpg'
import ChatAreaFooter from './ChatAreaFooter'

const ChatMain = () => {
  return (
    <div className="chat-area">
                <div className="chat-area-header">
                    <div className="chat-area-title">Friends Group</div>
                    <div className="chat-area-group">
                        <img className="chat-area-profile"
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%284%29+%281%29.png"
                            alt="" />
                        <img className="chat-area-profile"
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29+%281%29.png" alt="" />
                        
                        <span>+4</span>
                    </div>
                </div>
                <div className="chat-area-main">
                    <div className="chat-msg">
                        <div className="chat-msg-profile">
                            <img className="chat-msg-img"
                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
                                alt="" />
                            <div className="chat-msg-date">Message seen 1.22pm</div>
                        </div>
                        <div className="chat-msg-content">
                            <div className="chat-msg-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                            <div className="chat-msg-text">
                                <img
                                    src={chat} />
                            </div>
                            <div className="chat-msg-text">Quisque tincidunt urna felis, a condimentum lectus vulputate et.</div>
                        </div>
                    </div>
                    <div className="chat-msg owner">
                        <div className="chat-msg-profile">
                            <img className="chat-msg-img"
                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%284%29+%281%29.png" alt="" />
                            <div className="chat-msg-date">Message seen 1.22pm</div>
                        </div>
                        <div className="chat-msg-content">
                            <div className="chat-msg-text">Donec in congue tortor. Donec condimentum neque tempus accumsan egestas.
                            </div>
                            <div className="chat-msg-text">Proin ac malesuada sapien.</div>
                        </div>
                    </div>
                    <div className="chat-msg">
                        <div className="chat-msg-profile">
                            <img className="chat-msg-img"
                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29+%281%29.png" alt="" />
                            <div className="chat-msg-date">Message seen 2.45pm</div>
                        </div>
                        <div className="chat-msg-content">
                            <div className="chat-msg-text">Suspendisse accumsan elit et massa tristique dignissim. Quisque efficitur enim vitae ante tempus,</div>
                            <div className="chat-msg-text">Aliquam venenatis turpis libero, ut lobortis leo volutpat id. Suspendisse rutrum lobortis dui et tincidunt.</div>
                        </div>
                    </div>
                    <div className="chat-msg owner">
                        <div className="chat-msg-profile">
                            <img className="chat-msg-img"
                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%284%29+%281%29.png" alt="" />
                            <div className="chat-msg-date">Message seen 2.50pm</div>
                        </div>
                        <div className="chat-msg-content">
                            <div className="chat-msg-text">Duis eleifend vestibulum massa quis dictum.</div>
                            <div className="chat-msg-text">Sed scelerisque tortor at lobortis fermentum.</div>
                        </div>
                    </div>
                    <div className="chat-msg">
                        <div className="chat-msg-profile">
                            <img className="chat-msg-img"
                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png" alt="" />
                            <div className="chat-msg-date">Message seen 3.16pm</div>
                        </div>
                        <div className="chat-msg-content">
                            <div className="chat-msg-text">Morbi fringilla, mauris semper bibendum dapibus</div>
                        </div>
                    </div>
                    <div className="chat-msg">
                        <div className="chat-msg-profile">
                            <img
                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
                                alt="" className="chat-msg-img account-profile" />
                            <div className="chat-msg-date">Message seen 3.16pm</div>
                        </div>
                        <div className="chat-msg-content">
                            <div className="chat-msg-text">Consectetur adipiscing elit pellentesque habitant morbi tristique
                                senectus et.</div>
                        </div>
                    </div>
                    
                </div>
                <ChatAreaFooter />
            </div>
  )
}

export default ChatMain
