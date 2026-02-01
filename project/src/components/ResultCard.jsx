import React, { useEffect, useState } from 'react'
// import { CiBookmark } from "react-icons/ci";
import { Bookmark } from 'lucide-react';
const ResultCard = ({item}) => {
    // const elem=props.item;
    // console.log(item);
    const [saved,setSaved]=useState(false)

    useEffect(()=>{
      const collection=JSON.parse(localStorage.getItem('collection'))||[];
      const exists=collection.some((e)=>{return e.id===item.id});
      setSaved(exists);
    },[item.id])

    
    const toggleCollection=(item)=>{
      const collection=JSON.parse(localStorage.getItem('collection'))||[];
      // console.log(item)
      const exists=collection.some((e)=>{return e.id===item.id});
      let updatedCollection;
      if(exists){
          updatedCollection=collection.filter(e=>e.id!==item.id);
      }else{
          updatedCollection=[...collection,item];
      }

      // let newData=[...oldData,item];
      // console.log(newData)
      localStorage.setItem('collection',JSON.stringify(updatedCollection));
      console.log(localStorage.getItem('collection'));
      setSaved(!exists);
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