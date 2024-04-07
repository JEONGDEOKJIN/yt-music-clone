import React from 'react'

const layout = ({children} : any) => {
  return (
    <>
    <div> layout 이 먼저들어온다. </div>

    <div>page.tsx : {children} </div>
    
    </>

  )
}

export default layout