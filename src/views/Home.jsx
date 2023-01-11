import React from 'react';

import Content from '../components/content';
import LeftSide from '../components/leftSide';
import RightSide from '../components/rightSide';

const Home = () => {
  return (
    <>

        <main className='main__container'>
            <LeftSide/>
            <Content/>
            <RightSide/>
        </main>
    </>
  )
}

export default Home