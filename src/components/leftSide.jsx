import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const LeftSide = () => {
  return (
    <div className="leftside_container">
      <nav className="nav_list">
        <ul className='navbar_nav'>
          <li><FontAwesomeIcon icon="fa-solid fa-house" /> Domicile</li>
          <li><FontAwesomeIcon icon="fa-solid fa-book-open-reader" /> Liste de lecture</li>
          <li><FontAwesomeIcon icon="fa-solid fa-list-check" /> liste</li>
          <li><FontAwesomeIcon icon="fa-solid fa-microphone" /> podcasts</li>
          <li><FontAwesomeIcon icon="fa-solid fa-video" /> vidéos</li>
          <li><FontAwesomeIcon icon="fa-solid fa-tags" /> mots clés</li>
          <li>suite...</li>
        </ul>
        <br />
      </nav>

      <div className="title">
        <span>Mes tags</span>
        <span className="icon_title"><FontAwesomeIcon icon="fa-regular fa-square" /></span>
      </div>

      <div className="tagList_container">
        <ul>
          <li># react</li>
          <li># graphql</li>
          <li># node js</li>
          <li># impertinent</li>
          <li># javascript</li>
          <li># java</li>
          <li># html</li>
          <li># CSS</li>
          <li># webdev</li>
          <li># openSource</li>
          <li># vscode</li>
          <li># git</li>
          <li># npm</li>
          <li># sql</li>
          <li># ubuntu</li>
          <li># aws</li>
          <li># python</li>
        </ul>
      </div>
    </div>
  )
}

export default LeftSide