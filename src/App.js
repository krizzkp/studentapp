import logo from './logo.svg';
import './App.css';
import View from './components/View';
import Navigationbar from './components/Navigationbar';
import { Route, Routes } from 'react-router-dom';
import Addstudent from './components/Addstudent';

function App() {
  return (
    <div className='App'>
      <Navigationbar/>
      <Routes>
        <Route path='/' element={<View/>}/>
        <Route path='/add' element={<Addstudent/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
