import React from 'react'

const RightSide = () => {
  return (
    <div className="rightside_container">
      <section>
        <img src="https://png.pngtree.com/thumb_back/fh260/background/20191215/pngtree-modern-double-colors-neon-lights-on-brick-background-image_324803.jpg" alt="" />
        <br />
        <h1 className="title">"Hack the Planet" with New Relic & DEV</h1>
        <p>
          Utilisez New Relic pour créer une application d'observabilité du
          changement climatique et courez la chance de gagner jusqu'à 5 000 $ !
          <b>rejoignez le hackathon</b>
        </p>
      </section>

      <section className='listings'>
        <div className="title_section">
          <h3>Listings</h3>
          <a href="/">see all</a>
        </div>
        <hr />
        <br />

       <article>
        <a href="/">
          <p>Live-Coding on YouTube continues tomorrow</p>
          <span>events</span>
        </a>
       </article>

       <article>
        <a href="/">
          <p>Product Designer</p>
          <span>jobs</span>
        </a>
       </article>

       <article>
        <a href="/">
          <p>FREE COURSE, this weekend only: Ship better code faster</p>
          <span>education</span>
        </a>
       </article>

       <article>
        <a href="/">
          <p>MEAN / MERN Stack 100+ Learning Resources "FREE"</p>
          <span>misc</span>
        </a>
       </article>

      </section>

      <section>
        <div className="title_section">
          <h3>#news</h3>
        </div>
        <hr />
        <br />

       <article>
        <a href="/">
          <p>Game Dev Digest — Issue #83 - How and Why</p>
          <em>new</em>
        </a>
       </article>

       <article>
        <a href="/">
          <p>JavaScript News and Updates of February 2021</p>
          <em>new</em>
        </a>
       </article>

       <article>
        <a href="/">
          <p>🗞 What's new and special in Create Go App CLI v1.7.0?</p>
          <em>new</em>
        </a>
       </article>

       <article>
        <a href="/">
          <p>Google’s Termination of Dr. Mitchell, Clubhouse Security, Low-Code Tools, & more on DevNews!</p>
          <span>1 comment</span>
        </a>
       </article>

       <article>
        <a href="/">
          <p>Ember 3.25 Released</p>
          <em>new</em>
        </a>
       </article>

      </section>

      <section className='help'>
        <div className="title_section">
          <h3>#help</h3>
        </div>
        <hr />
        <br />

       <article>
        <a href="/">
          <p>How to start a programming blog?</p>
          <em>new</em>
        </a>
       </article>

       <article>
        <a href="/">
          <p>How to use @yarnpkg/core?</p>
          <span>2 comment</span>
        </a>
       </article>

       <article>
        <a href="/">
          <p>Need advice regarding web development</p>
          <span>5 comment</span>
        </a>
       </article>

      </section>
    </div>
  );
}

export default RightSide