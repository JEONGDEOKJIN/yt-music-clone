"use client"

import React from 'react'
import {BarLoader} from "react-spinners"
    // https://www.davidhu.io/react-spinners/ 들어가서 원하는 것 가져오면 됨 

const LoadingBar = () => {
  return (
    <div className='w-full'>
        <BarLoader color='#36d7b7' cssOverride={{width : "100%"}} />
    </div>
        // 로딩 컴포넌트를 구현할 때, useState 를 사용한다.
    

  )
}

export default LoadingBar