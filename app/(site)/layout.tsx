import React from 'react'
// import page.tsx from './page.tsx' // 살짝 이런 느낌이고 -> 이게 children 으로 들어감 

const layout = ({children} : any) => {

  
  return (
    // layout 의 children 으로, page.tsx 가 들어온다.
    <>
    
    <div>{children} </div>
    {/* children 자리에서     <div>page</div> 이게 return! 된다! 는 의미⭐⭐⭐ */}

    </>

  )
}

export default layout