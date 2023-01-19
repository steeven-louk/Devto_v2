import './App.scss';
import Navbar from './components/navbar';

import Home from './views/Home';
import Login from './views/auth/Login';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Register from './views/auth/Register';
import ListeDeLecture from './views/listeDeLecture';

function App() {

  // const storageTheme = JSON.parse(localStorage.getItem('theme'));
  const [isAuthentificated, setIsAuthentificated] = useState(false);
  const [theme, setTheme] = useState(false);

console.log(theme);
  const isLoggedIn =()=>{

  const getUser = JSON.parse(localStorage.getItem('name'));

  if(getUser !== null){
      setIsAuthentificated(true);
    }
    else{
      setIsAuthentificated(false);
    }
  }

  // useEffect(()=>{
  //   theme ==='Light' ? localStorage.setItem('theme',JSON.stringify('Dark')) : localStorage.setItem('theme',JSON.stringify('Dark'));

  // },[theme])

useEffect(() => {
  isLoggedIn();
  
}, [isAuthentificated]);

  return (
    <div className={theme? "App themeDark" : 'App'}>

        <Navbar isLogged={isAuthentificated} theme={theme} setTheme={setTheme} auth={setIsAuthentificated} />

        <Routes>
          <Route path="*" exact element={<Home isLogged={isAuthentificated}/>}/>
          <Route path="/bookmark" exact element={<ListeDeLecture/>} />

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
