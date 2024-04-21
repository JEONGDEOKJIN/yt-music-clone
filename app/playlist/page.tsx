import { getPlaylistById } from '@/lib/dummyData'
import React from 'react'

interface PlaylistPageProps {
  searchParams: {
    list: string  // 이렇게 들어간 이유는, props.searchParams.list 이렇게 객체 안에 > 프로퍼티 > 안에 list 가 있기 때문
  }

}

const page = async (props : any) => {

 
  const playlist = await getPlaylistById(Number(props.searchparams.list))

  console.log(playlist)

  return (
    <div>playlist page : {props.searchParams.list}</div>
  )
}

export default page