import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div>
      <Login></Login>
      <Signup></Signup>
      <ToastContainer />
    </div>
  );
}

export default App;
