import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice';

const Tabs = () => {
    const tabs=['Images','Videos','gif']
    const dispatch=useDispatch();
    const activeTab=useSelector((state)=>state.search.activeTab);
  return (
    <div className='flex gap-8 p-5 justify-center'>
        {tabs.map((elem,id)=>{
            return <button className={`${activeTab==elem?'bg-blue-600':'bg-gray-600'}  px-4 py-2 transition rounded cursor-pointer active:scale-95 uppercase`} key={id} onClick={()=>{
                dispatch(setActiveTab(elem))
            }}>{elem}</button>
        })}
    </div>
  )
}

export default Tabs