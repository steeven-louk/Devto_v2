import './App.scss';
import Register from './views/auth/Register';
import Navbar from './components/navbar';

import Home from './views/Home';
import Login from './views/auth/Login';

function App() {
  return (
    <div className="App">
        {/* <Home/> */}
        <Navbar />

        <Register/>
        {/* <Login/> */}
    </div>
  );
}

export default App;
