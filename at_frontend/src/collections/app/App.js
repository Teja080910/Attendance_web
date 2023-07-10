import './App.css';
import Log from '../login/login';
import Register from '../register/register';
import Book from '../book/book';
import Screen from '../screen';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Log/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/screen' element={<Screen/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
