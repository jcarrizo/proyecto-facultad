import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/home/Home';

function App() {
  return (
    <div>
      <Login></Login>
      <Signup></Signup>
      <Home></Home>
      <ToastContainer />
    </div>
  );
}

export default App;
