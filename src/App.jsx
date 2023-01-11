import './App.scss';
import Navbar from './components/navbar';

import Home from './views/Home';
import Login from './views/auth/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/login" exact element={<Login/>}/>
        </Routes>

    </div>
  );
}

export default App;
