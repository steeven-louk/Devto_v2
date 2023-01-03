import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <nav>
        <div className="container">
            <div className="left_nav">
                <div className="navbar_brand">
                    <img src="./assets/dev_logo.png" alt="" />
                </div>
                <div className="search_container">
                    <input type="text" className="search" placeholder='search...' />
                </div>
            </div>
            <div className="right_nav">
                <ul>
                    <li><button>Ecrire un message</button></li>
                    <li className='icon_container'><FontAwesomeIcon icon="fa fa-comment"/></li>
                    <li className='icon_container'><FontAwesomeIcon icon="fa fa-bell" /></li>
                    <li>
                        <div className="user">
                            <img src="./assets/dev_logo.png" alt="profil_img" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar