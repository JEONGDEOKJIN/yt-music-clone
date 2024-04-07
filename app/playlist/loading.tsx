"use client"

import LoadingBar from '@/components/LoadingBar'
import React from 'react'
import {BarLoader} from "react-spinners"
    // https://www.davidhu.io/react-spinners/ 들어가서 원하는 것 가져오면 됨 

const loading = () => {
  return (    
    <LoadingBar />
  )
}

export default loading