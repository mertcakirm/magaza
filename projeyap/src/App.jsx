import { useState } from 'react'
import MainPages from './components/MainPages'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/user/login';
import Register from './components/user/register';
import CategoryPageMan from './components/category/categorypage';
import CategoryPageWoman from './components/category/categorypagewoman';
import PayMent from './components/payment/PayMent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPages />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/Man' element={<CategoryPageMan />}/>
        <Route path='/Woman' element={<CategoryPageWoman />}/>
        <Route path='/payment' element={<PayMent />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
