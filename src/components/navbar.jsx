import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className="container">
            <div className="left_nav">
                <div className="navbar_brand">
                    <span>icon</span>
                </div>
                <div className="search_container">
                    <input type="text" className="search" placeholder='search...' />
                </div>
            </div>
            <div className="right_nav">
                <ul>
                    <li><button>Ecrire un message</button></li>
                    <li>com</li>
                    <li>bell</li>
                    <li>pro</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar