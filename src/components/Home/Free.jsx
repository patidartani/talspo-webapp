import React from 'react'
import "./Free.css"
import { useNavigate } from 'react-router-dom'

const Free = () => {
  const navigate = useNavigate()

  const siteMapHandler = () => {
    navigate('/links')
  }

  return (
    <div className='Free-main'>
         <h6 onClick={siteMapHandler}>Sitemap</h6>
    </div>
  )
}

export default Free