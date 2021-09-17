import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Rutas from './ruta/Rutas';
import Home from './pages/home/Home';


function App() {
  return (
    <div>
      <Rutas></Rutas>
      <Home></Home>
      <ToastContainer />
    </div>
  );
}

export default App;
