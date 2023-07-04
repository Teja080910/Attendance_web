import './App.css';
import Log from '../login/login';
import Register from '../register/register';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Log/>}/>
    <Route path='/register' element={<Register/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
