import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Edit from './components/Edit';
import Home from './components/Home';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  exact path='/' element={<Home/>}/>
      <Route  exact path='/edit/:id' element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

