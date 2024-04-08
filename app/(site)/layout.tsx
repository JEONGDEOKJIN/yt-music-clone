import React from 'react'
// import page.tsx from './page.tsx' // 살짝 이런 느낌이고 -> 이게 children 으로 들어감 

import Header from "@/components/Header"

const layout = ({children} : {children : React.ReactNode}) => {

  
  return (
    // layout 의 children 으로, page.tsx 가 들어온다.
    <>
    <div className='w-full h-full'>
      <Header> {children} </Header>
    </div>
    {/* children 자리에서 <div>page</div> 이게 return! 된다! 는 의미⭐⭐⭐ */}
    {/* 아, Header 태그 자체를 컴포넌트로 만들고, props 를 받는데, 이 형태가 좀 낯설다 📛📛📛 */}

    {/* 계층 : layout > Header > page 가 있음  */}

    </>

  )
}

export default layout