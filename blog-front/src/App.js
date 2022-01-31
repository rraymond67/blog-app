import { Routes, Route } from 'react-router-dom';
import './App.css';
// import User from './screens/User/User';
// import Login from './Login/Login';
// import SignUp from './SignUp/SignUp';
// import Home from './Home/Home';
import Display from './screens/Display/Display';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Display />} />
        {/* <Route path='/login' element={<Login />} /> */}
        {/* <Route path='/signup' element={<SignUp />} /> */}
        {/* <Route path='/user/:id' element={<User />} /> */}
      </Routes>
    </div>
  );
}

export default App;
