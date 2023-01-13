import './App.scss';
import Navbar from './components/navbar';

import Home from './views/Home';
import Login from './views/auth/Login';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Register from './views/auth/Register';

function App() {

  const [isAuthentificated, setIsAuthentificated] = useState(false);

  const isLoggedIn =()=>{

  const getUser = JSON.parse(localStorage.getItem('name'));

  if(getUser !== null){
      setIsAuthentificated(true);
    }
    else{
      setIsAuthentificated(false);
    }
  }

useEffect(() => {
  isLoggedIn();
}, [isAuthentificated]);

  return (
    <div className="App">

        <Navbar isLogged={isAuthentificated} auth={setIsAuthentificated} />

        <Routes>
          <Route path="*" exact element={<Home isLogged={isAuthentificated}/>}/>

        {isAuthentificated === false ?<>
            <Route path="/register" exact element={<Register auth={setIsAuthentificated}/>}/> 
            <Route path="/login" exact element={<Login/>}/> 
        </>     : ''   
      }
        </Routes>

    </div>
  );
}

export default App;
