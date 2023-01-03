import './App.scss';
import Content from './components/content';
import LeftSide from './components/leftSide';
import Navbar from './components/navbar';
import RightSide from './components/rightSide';

function App() {
  return (
    <div className="App">
        <Navbar />

        <main className='main__container'>
            <LeftSide/>
            <Content/>
            <RightSide/>
        </main>
    </div>
  );
}

export default App;
