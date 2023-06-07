import React, { useState } from 'react'
import {BiGroup} from 'react-icons/bi'

const ChatDetails = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorClick = (e) => {
    const theme = e.target.getAttribute('data-color');
    document.body.setAttribute('data-theme', theme);
    setSelectedColor(theme);
  };
  return (
    <div className="detail-area">
                <div className="detail-area-header">
                    <div className="msg-profile group">
                        <BiGroup />
                    </div>
                    <div className="detail-title">Friends Group</div>
                    <div className="detail-subtitle">Created by Rohan, 28 Jan 2023</div>
                    <div className="detail-buttons">
                        <button className="detail-button">
                            <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"
                                className="feather feather-phone">
                                <path
                                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                            </svg>
                            Call Group
                        </button>
                        <button className="detail-button">
                            <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"
                                className="feather feather-video">
                                <path d="M23 7l-7 5 7 5V7z" />
                                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                            </svg>
                            Video Chat
                        </button>
                    </div>
                </div>
                <div className="detail-changes">
                    <input type="text" placeholder="Search in Conversation" />
                    <div className="detail-change">
                        Change Color
                        <div className="colors">
                            <div className="color blue selected" data-color="blue" onClick={handleColorClick}></div>
                            <div className="color purple" data-color="purple" onClick={handleColorClick}></div>
                            <div className="color green" data-color="green" onClick={handleColorClick}></div>
                        </div>
                    </div>
                </div>
                <div className="detail-photos">
                    <div className="detail-photo-title">
                        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-image">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <path d="M21 15l-5-5L5 21" />
                        </svg>
                        Shared photos
                    </div>
                    <div className="detail-photo-grid">
                        <img
                            src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2168&q=80" />
                        <img
                            src="https://images.unsplash.com/photo-1516085216930-c93a002a8b01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
                        <img
                            src="https://images.unsplash.com/photo-1458819714733-e5ab3d536722?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80" />
                        <img
                            src="https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2287&q=80" />

                    </div>
                    <div className="view-more">View More</div>
                </div>
                
            </div>
  )
}

export default ChatDetails
