import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Rutas from './ruta/Rutas';
import '../src/css/styles.css'

function App() {
  return (
    <div>
      <Rutas></Rutas>
      <ToastContainer />
    </div>
  );
}

export default App;
