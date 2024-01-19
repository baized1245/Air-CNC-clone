import React from 'react'
import Navbar from '../components/Shared/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-28 pb-20">
        <Outlet />
      </div>
    </div>
  )
}

export default Main
