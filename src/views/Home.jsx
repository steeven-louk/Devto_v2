import React from 'react';

import Content from '../components/content';
import LeftSide from '../components/leftSide';
// import Navbar from '../components/navbar';
import RightSide from '../components/rightSide';

const Home = () => {
  return (
    <>
         {/* <Navbar /> */}
        <main className='main__container'>
            <LeftSide/>
            <Content/>
            <RightSide/>
        </main>
    </>
  )
}

export default Home