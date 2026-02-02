import React from 'react'
import CollectionCard from '../components/CollectionCard'
import { useDispatch, useSelector } from 'react-redux'
import { clearCollection,emptyToast } from '../redux/features/collectionSlice'


const CollectionPage = () => {

  const collection=useSelector(state=>state.collection.items)
  const dispatch=useDispatch();
  const clearAll=()=>{
    dispatch(clearCollection())
    dispatch(emptyToast())
  }

  return (

<div>
  {collection.length>0?
    <div className="p-4 flex justify-between items-center">
      <h2>Your Collection</h2>
      <button className='bg-red-500 rounded px-4 py-2' onClick={()=>clearAll()}>Empty collection</button>
    </div>:<h2>Your collection is empty</h2>}
  <div className='flex w-full flex-wrap gap-5 justify-center overflow-auto pt-5'>
  
      {collection.map((item,id)=>{
        return (<div key={id}>
          <CollectionCard item={item}/>
        </div>)
      })}
      </div>
</div>
  )
}

export default CollectionPage