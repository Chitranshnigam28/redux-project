import React, { useEffect, useState } from 'react'
import { Bookmark } from 'lucide-react';
import { useDispatch,useSelector } from 'react-redux';
import { addCollection, addToast, removeToast } from '../redux/features/collectionSlice';
const ResultCard = ({item}) => {
    
    const saved=useSelector(state=>state.collection.items.some(e=>e.id===item.id));
    const dispatch=useDispatch()

    
    const toggleCollection=(item)=>{
      
      if(!saved){
        dispatch(addCollection(item));
        dispatch(addToast())
      }else{
        dispatch(removeCollection(item));
        dispatch(removeToast())
      }
      // setSaved(!exists);
    }

    return (
    <div className='bg-white w-[23vw] h-80 relative text-black'>
      <div className='h-full'>
        {item.type=='photo'?<img className='h-full w-full object-cover object-center' src={item.src}/>:''}
        {item.type=='video'?<video className='h-full w-full object-cover object-center' src={item.src} autoPlay loop muted/>:''}
        {item.type=='gif'?<img className='h-full w-full object-cover object-center' src={item.src}/>:''}
      </div>
      <div id='bottom' className='text-white absolute bottom-0 px-4 py-10 w-full p-4'>
        <h2 className='text-xl font-semibold'>{item.title}</h2>
      </div>
      {/* <CiBookmark className='absolute top-0 right-0 z-999 text-3xl text-red-500'/> */}
      <Bookmark className='absolute top-2 right-2 z-999 text-3xl text-blue-600 cursor-pointer transition active:scale-200' onClick={(e)=>{
       e.preventDefault();     // stops <a> navigation
       e.stopPropagation();
       toggleCollection(item);
      }}
        fill={saved?'#2563EB':''}/>
    </div>
  )
}

export default ResultCard