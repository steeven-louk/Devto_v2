import React from 'react'
import CardComponent from './cardComponent'

const Content = () => {
  return (
    <div className='content_container'>
      <div className="header">
        <h2>Posts</h2>
        <div className="filtre">
          <h2>Dernier</h2>
          <h2>Top</h2>
        </div>
      </div>

      <div className="post_container">
        <CardComponent/>
      </div>
    </div>
  )
}

export default Content