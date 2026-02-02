import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice';

const SearchBar = () => {
    const [text, setText] = useState('')
    const dispatch=useDispatch();

    const submitHandler=(e)=>{
        e.preventDefault();
        // console.log('form submited');
        dispatch(setQuery(text));
        setText('')
    }
  return (
    <div>
        <form className='flex px-10 pb-8 gap-2 bg-(--c2)' action="" onSubmit={submitHandler}>
            <input className='border-2 outline-none px-2 py-4 rounded w-full' type="text" placeholder='Search anything...' value={text} onChange={(e)=>{setText(e.target.value)}} required/>
            <button className='cursor-pointer active:scale-95 border-2 outline-none px-4 py-4 rounded'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar