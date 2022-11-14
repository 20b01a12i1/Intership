import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Data from './Data';
import Cart from './Components/Cart'
import LeftPart from './Components/LeftPart';
import Demo2 from './Components/demo2';
import Page2 from './Page2';
import Page3 from './Page3';
const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Data />} />
            <Route path='/page3' element={<Page3/>} />
            <Route path='/page2' element={<Page2/>} />
            <Route path='/leftpart' element={<LeftPart/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/demo2' element={<Demo2/>} />
        </Routes>
    </div>
  )
}

export default App
