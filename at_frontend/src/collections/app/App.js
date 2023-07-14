import './App.css';
import Log from '../login/login';
import Register from '../register/register';
import Screen from '../screen';
import Sdisplay from '../book/sdisplay';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Log/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/screen' element={<Screen/>}/>
    <Route path='/sdisplay' element={<Sdisplay/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
