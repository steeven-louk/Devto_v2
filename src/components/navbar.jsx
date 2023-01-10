import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {

    const [open, setOpen] = useState(false);

  return (
    <nav className='navbar'>
        <div className="container">
            <div className="left_nav">
                <div className="subMenu_icon" onClick={()=> setOpen(true)} >
                    <FontAwesomeIcon icon="fa-solid fa-bars" className='sub_ico' />
                </div>
                <div className="navbar_brand">
                    <img src="./assets/dev_logo.png" alt="logo" />
                </div>
                <div className="search_container">
                    <input type="text" className="search" placeholder='search...' />
                </div>

                <div className={!open ? "subMenu" : "subMenu open"}>
                    <div className="subHeader">
                        DEV Community 👩‍💻👨‍💻
                        <span className="cross" onClick={()=> setOpen(false)}>
                            <FontAwesomeIcon icon="fa-sharp fa-xmark" />
                        </span>

                    </div>
                    <nav className="nav_list">
        <ul className='navbar_nav'>
          <li><FontAwesomeIcon icon="fa-solid fa-house" /> Domicile</li>
          <li><FontAwesomeIcon icon="fa-solid fa-book-open-reader" /> Liste de lecture</li>
          <li><FontAwesomeIcon icon="fa-solid fa-list-check" /> liste</li>
          <li><FontAwesomeIcon icon="fa-solid fa-microphone" /> podcasts</li>
          <li><FontAwesomeIcon icon="fa-solid fa-video" /> vidéos</li>
          <li><FontAwesomeIcon icon="fa-solid fa-tags" /> mots clés</li>
          <li><FontAwesomeIcon icon="fa-solid fa-lightbulb" /> FAQ</li>
          <li><FontAwesomeIcon icon="fa-solid fa-bags-shopping" /> Boutique Forem</li>
          <li><FontAwesomeIcon icon="fa-solid fa-heart" /> Commanditaires</li>
          <li><FontAwesomeIcon icon="fa-solid fa-trumpet" /> A propos de</li>
          <li><FontAwesomeIcon icon="fa-solid fa-book-open" /> Contacter</li>
          <li><FontAwesomeIcon icon="fa-solid fa-book-open" /> Guides</li>
          <li><FontAwesomeIcon icon="fa-solid fa-face" /> Comparaisons de logiciel</li>
          
          <span>Autre</span>

          <li><FontAwesomeIcon icon="fa-solid fa-thumbs-up" /> Code de conduite</li>
          <li><FontAwesomeIcon icon="fa-solid fa-eyes" /> Politique de confidentialité</li>
          <li><FontAwesomeIcon icon="fa-solid fa-tags" /> Conditions d'utilisation</li>


        <div className="subMenu_social">
            <FontAwesomeIcon icon="fa-brands fa-twitter" className='social-icon'/>
            <FontAwesomeIcon icon="fa-brands fa-square-facebook" className='social-icon'/>
            <FontAwesomeIcon icon="fa-brands fa-github" className='social-icon'/>
            <FontAwesomeIcon icon="fa-brands fa-instagram" className='social-icon'/>
            <FontAwesomeIcon icon="fa-brands fa-twitch" className='social-icon'/>
        </div>
        </ul>
        <br />
                        </nav>
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