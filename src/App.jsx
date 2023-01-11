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
  let  getUser = JSON.parse(localStorage.getItem('user'));
  if(getUser === undefined){
    setIsAuthentificated(false);
  }else{
    setIsAuthentificated(true);
  }
  }

useEffect(() => {
  isLoggedIn();
}, [isAuthentificated]);

  return (
    <div className="App">

        <Navbar isLogged={isAuthentificated}/>

        <Routes>
          <Route path="/" exact element={<Home isLogged={isAuthentificated}/>}/>
          <Route path="*" exact element={<Home />}/>
        {isAuthentificated && <>
            <Route path="/register" exact element={<Register auth={setIsAuthentificated}/>}/> 
            <Route path="/login" exact element={<Login/>}/> 
        </>        
      }
        </Routes>

    </div>
  );
}

export default App;
