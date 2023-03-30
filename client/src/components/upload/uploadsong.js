import React from 'react'
import { useState } from 'react'
import { storage } from '../../firebase'
import {ref,uploadBytes} from 'firebase/storage'
import {v4} from 'uuid'
function Uploadsong() {
    const [song,setSong]=useState(null)
    const uploadsongs=()=>{
    if (uploadsongs==null) return;
    const audioRef=ref(storage,`latestSongs/${uploadsongs.name+v4()}`);
    uploadBytes(audioRef,uploadsongs).then(()=>{
        alert("song uploaded")
    })

    }
  return (
    <div>
        <input type="file" onChange={(event)=>{
            setSong(event.target.files[0])}}/>
        <button onClick={uploadsongs}></button>
    </div>
  )
}

export default Uploadsong