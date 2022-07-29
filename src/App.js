import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Shared/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import Samsung from './pages/Dashboard/Samsung/Samsung';
import Iphone from './pages/Dashboard/Iphone/Iphone';
import Xiaomi from './pages/Dashboard/Xiaomi/Xiaomi';
import Oppo from './pages/Dashboard/Oppo/Oppo';
import Vivo from './pages/Dashboard/Vivo/Vivo';
import Realme from './pages/Dashboard/Realme/Realme';
import Details from './pages/Details/Details';
import Signup from './pages/Login/Signup';
import Login from './pages/Login/Login';
import Users from './pages/Home/Users';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Dashboard></Dashboard> */}
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/users' element={<Users></Users>}></Route>

        <Route path='/' element={<Dashboard></Dashboard>}>
        <Route index element={<Samsung></Samsung>}></Route>
        <Route path='iphone' element={<Iphone></Iphone>}></Route>
        <Route path='xiaomi' element={<Xiaomi></Xiaomi>}></Route>
        <Route path='oppo' element={<Oppo></Oppo>}></Route>
        <Route path='vivo' element={<Vivo></Vivo>}></Route>
        <Route path='realme' element={<Realme></Realme>}></Route>
        <Route path='realme/:productId' element={<Details></Details>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
