import React from 'react'
import ScoreCard from '../../components/admin/ScoreCard'
import {AiOutlineBarChart,AiOutlineLineChart,AiOutlineAreaChart} from 'react-icons/ai'
import Graph from '../../components/admin/Graph'
import FilterTable from '../../components/admin/FilterTable'

const Dashboard = () => {
  return (
    <div className='row'>
                <div className='col-md-12'>
                <main>
                  <div class="page-heading mt-5">
                      <h1>Dashboard</h1>
                  </div>
                  <div class="insights">
                    <ScoreCard text={'chats'} price={150} percent={81} icon={<AiOutlineAreaChart />}/>
                    <ScoreCard text={'groups'} price={20} percent={60} icon={<AiOutlineBarChart />}/>
                    <ScoreCard text={'messages'} price={1234} percent={41} icon={<AiOutlineLineChart />}/>
                  </div>
                  </main>
                </div>
                <div className='col-md-6'><div class="progress-chart"><Graph /></div></div>
                <div className='col-md-6 table-box'><FilterTable /></div>
              </div>
  )
}

export default Dashboard
