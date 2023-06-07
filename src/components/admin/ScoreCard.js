import React from 'react'

const ScoreCard = ({text,price,percent,icon}) => {
  return (
    <div class={text}>
        <span class="material-symbols-outlined">
            {icon}
        </span>
        <div class="middle">
            <div class="left">
                <h3>Total {text}</h3>
                <h1>Rs {price}</h1>
            </div>
            <div class="progress-main">
                <svg>
                    <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div class="number">
                    <p>{percent}%</p>
                </div>
            </div>
        </div>
        <small class="text-muted">Last 24 Hours</small>
    </div>
  )
}

export default ScoreCard
