import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="py-6 px-10 bg-(--c1) flex items-center justify-between ">
            <h2 className='text-2xl font-semibold'>MediaSearch</h2>
            <div className="flex items-center gap-5 text-xl">
              <Link to='/' className='font-medium cursor-pointer hover:border-b-2 active:scale-100'>Search</Link>
              <Link to='/collection' className='font-medium cursor-pointer hover:border-b-2 active:scale-100'>Collection</Link>
            </div>
        </div>
  )
}

export default Navbar