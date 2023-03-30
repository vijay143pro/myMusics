import { useNavigate } from 'react-router-dom'
import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { storage } from '../../firebase'
import { getDownloadURL, listAll } from 'firebase/storage'
import {ref} from 'firebase/storage'
function Home() {
  const [data, setData] = useState([])
  const [songList,setSongList]=useState([])
const songListRef=ref(storage,"audio/") 
  useEffect(()=>{
	listAll(songListRef).then((res)=>{
		res.items.forEach((item)=>{
			getDownloadURL(item).then((url)=>{
				setSongList((prev)=>[...prev,url])
				console.log(url);
			})
		})
	})
    fetchData()
   
  },[])
  const fetchData = async () => {
    await axios.get('http://localhost:4000/songs').then(
        response => {
            console.log("hh",response.data)
            setData(response.data.data)
            console.log(data)
        })
  };
return(
	<div>
		{data.map((dat)=>{
			return(
				<div>
					<p>{dat._id}</p>
					<h1>{dat.song}</h1>
				</div>
			)
		})}
	</div>
)
}

export default Home


