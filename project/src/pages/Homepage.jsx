import React from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { useSelector } from 'react-redux'

const Homepage = () => {

    const {query}=useSelector((store)=>store.search)


  return (
    <div>
        <div className="py-6 px-10 bg-gray-900 text-2xl font-semibold">
            <h2>MediaSearch</h2>
        </div>
      <SearchBar/>

        {query!=''?<div>
      <Tabs/>
      <ResultGrid/>
        </div>:''}
      
    </div>
  )
}

export default Homepage