import { getRandomInt, sleep } from '@/lib/utils'
import React from 'react'

const page = async () => {

  // console.log("1️⃣ before sleep")
  
  // // '서버에 갔다 오는 시간' 을 이렇게 테스트 해볼 수도? | 비동기 처리를 이렇게 해볼수도? 
  // await sleep(5000) // 2초 대기(비동기 처리) 후 동기 처리(아래 코드 실행)
  
  console.log("2️⃣ after sleep")
  // throw new Error("my error")


  return (
    <div className='text-blue-800  cursor-pointer hover:bg-yellow-100'>main page</div>
  )
}

export default page