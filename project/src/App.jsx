import React from 'react'
import SearchBar from './components/SearchBar';
import Tabs from './components/Tabs';
import ResultGrid from './components/ResultGrid';
import { Routes,Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CollectionPage from './pages/CollectionPage';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div className='bg-black min-h-screen w-full text-white'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/collection' element={<CollectionPage/>} />
      </Routes>
      
    </div>
  )
}

export default App