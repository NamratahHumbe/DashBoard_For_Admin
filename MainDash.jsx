import React from 'react'
import './MainDash.css'
import Cards from '../components/Cards'
import Table from '../components/Table'

function MainDash() {
  return (
    <div className="MainDash">
    <h1>Dashboard</h1>
    <Cards/>
    <h3>Recent Orders</h3>
    <Table />
  </div>
  )
}

export default MainDash