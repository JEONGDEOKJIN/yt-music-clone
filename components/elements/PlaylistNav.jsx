"use client"

import React from 'react'
import { IoMdPlayCircle } from "react-icons/io";


const PlaylistNav = ({playlist}) => {
  
  // 이렇게 객체구조분해할당해서 쓰니까 좋을거 같은데 ⭐⭐⭐ 이게 잘 생각이 안나
  const {id, owner, playlistName, songList} = playlist

  const onClickPlay = () => {
    // To do play music
  }



  return (
    <li className='mx-3 px-4 h-[56px] flex flex-row justify-between items-center
      hover:bg-neutral-700 rounded-lg group
    '>
      <div>
        <div className='text-[14px]'>{playlistName}</div>
        <div className='text-[12px] text-neutral-500' >{owner}</div>
      </div>
      
      <div 
        onClick={onClickPlay}
        className='hidden group-hover:block cursor-pointer'>
        <div><IoMdPlayCircle size={30}/></div>
      </div>

    </li>
  )
}

export default PlaylistNav