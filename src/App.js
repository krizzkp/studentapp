import logo from './logo.svg';
import './App.css';

import Navigationbar from './components/Navigationbar';
import { Route, Routes } from 'react-router-dom';
import Addstudent from './components/Addstudent';

import ViewStudents from './components/ViewStudents';


function App() {
  return (
    <div className='App'>
      <Navigationbar/>
      <Routes>
        <Route path='/' element={<ViewStudents/>}/>
        <Route path='/add' element={<Addstudent
        data={{id:'',name:'',grade:''}}
        method="post"/>}/>
      </Routes>
    </div>
  );
}

export default App;
