import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getGif,fetchPhotos,fetchVideos} from '../api/mediaApi'
import {setQuery,setResults,setLoading,setError} from '../redux/features/searchSlice';
import ResultCard from './ResultCard';

const ResultGrid = () => {
    const {query,activeTab,results,loading,error}=useSelector((store)=>store.search)
    const dispatch=useDispatch();
    
    useEffect(()=>{
        if(!query){
        return}
        
        const getData=async ()=>{
        try {
                let data=[];
            
                if(activeTab=='Images'){
                    // console.log("activeTab->"+activeTab)
                    const res=await fetchPhotos(query);
                    // console.log(res.results);
                    data=res.results.map((elem)=>({
                        id:elem.id,
                        type:elem.asset_type,
                        title:elem.alt_description,
                        thumbnail:elem.urls.small,
                        src:elem.urls.full,
                        alt:elem.alt_description,
                        url:elem.links.html

                    }));
                    // console.log(data);
                    
                    
                }else if(activeTab=='Videos'){
                    const res=await fetchVideos(query);
                    // console.log(res.data);
                    // console.log(res.data.videos);
                    data=res.data.videos.map((elem)=>({
                        id:elem.id,
                        type:'video',
                        title:elem.user.name||'video',
                        thumbnail:elem.image,
                        src:elem.video_files[0].link,
                        url:elem.url
                    }));
                    // console.log('Videos'+JSON.stringify(data,0,2));
                }else if(activeTab=='gif'){
                //    console.log('activeTab==gif->'+activeTab)
                    const res=await getGif(query);
                    // console.log(res.data);
                     data=res.data.data.map((elem)=>({
                        id:elem.id,
                        type:elem.type,
                        title:elem.title,
                        thumbnail:elem.file.sm.gif.url,
                        src:elem.file.hd.gif.url,
                        url:elem.file.hd.gif.url
                     }))
                     
                    //console.log(data);
                }
                
                // console.log(data);
                dispatch(setResults(data))
            }
        catch(error) {
            dispatch(setError(error.message));
        }
    }
        getData()
    },[query,activeTab,dispatch])

    
    if(error){
        return (
        <div>
           Error- {error}
        </div>);
    }
    if(loading){
        return <h1>Loading...</h1>
    }
  return (
    <div className='flex w-full flex-wrap gap-5 justify-center overflow-auto'>{results.map((elem,idx)=>{
        return (<a href={elem.url} target='_blank' key={idx}><ResultCard item={elem}/></a>)
    })}</div>
  )
}

export default ResultGrid