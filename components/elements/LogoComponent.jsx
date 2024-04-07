"use client"

import { useRouter } from 'next/navigation';
import React from 'react'

const LogoComponent = () => {
    const { push } = useRouter(); // ✅ 두 번째에 있는 app Router 용 useRouter 로 설정해야 함

    const onClickLogo = () => {
        // home으로 이동하는 로직
        push('/')
      };

  return (
    <>
    
    <div className='bg-green-300 hover:bg-blue-300  '>

        <div className='bg-pink-300 text-pink-600 w-[10px] h-[10px]'>
          아이콘
        </div>


        
    </div>
    
    </>
  )
}

export default LogoComponent