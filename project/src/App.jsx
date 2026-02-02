import React from 'react'
import SearchBar from './components/SearchBar';
import Tabs from './components/Tabs';
import ResultGrid from './components/ResultGrid';
import { Routes,Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CollectionPage from './pages/CollectionPage';
import Navbar from './components/Navbar';
import { ToastContainer,Bounce} from 'react-toastify';

const App = () => {
  return (
    <div className='bg-black min-h-screen w-full text-white'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/collection' element={<CollectionPage/>} />
      </Routes>
      <ToastContainer position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
/>
    </div>
  )
}

export default App