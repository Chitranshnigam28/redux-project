import axios from 'axios'

const UNSPLASH_KEY=import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY=import.meta.env.VITE_PEXELS_KEY
const KLIPY_KEY=import.meta.env.VITE_KLIPY_KEY

export const fetchPhotos=async (query,page=1,per_page=20)=>{
const res=await axios.get('https://api.unsplash.com/search/photos',{
    params:{query,page,per_page},
    headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
})
return res.data

}

export const fetchVideos=async (query,per_page=20)=>{
    
    const res=await axios.get('https://api.pexels.com/videos/search',{
    params:{query,per_page},
    headers:{Authorization:`${PEXELS_KEY}`}
})
console.log('res for videos -> '+res)
return res
}

export const getGif=async (query,page=1,per_page=20)=>{
    const res=await axios.get(`https://api.klipy.com/api/v1/${KLIPY_KEY}/gifs/search?page=${page}&per_page=${per_page}&q=${query}`)
    return res.data;
}