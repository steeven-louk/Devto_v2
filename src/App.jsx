import './App.scss';
import Register from './views/auth/Register';
import Navbar from './components/navbar';

import Home from './views/Home';

function App() {
  return (
    <div className="App">
        {/* <Home/> */}
        <Navbar />

        <Register/>
    </div>
  );
}

export default App;
