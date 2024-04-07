import React, { ReactNode } from 'react'
import Logo from "./elements/Logo"
import Navigator from "./elements/Navigator"
import LogoComponent from "./elements/LogoComponent"


interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar:React.FC<SidebarProps>  = ({children} )  => {
  return (
    <>  

    {/* ⭐⭐h-full 이후 -  global.css > body 에 height 를 100vh 를 줘서 꽉 차게 함  */}
      <div className='flex flex-row h-full  '>
        {/* sidebar */}
          <nav className='w-[240px] border-r-[1px] border-neutral-600'>
            <div className='p-[24px]'> 
              <Logo />              
            </div>
            <div><Navigator /></div>
          </nav>
      
      {/* 단순히 flex-grow 1 만 주지 않고, flex-shrink 1 을 줘서, 줄어들어도, 옆으로 끝가지 먹고 있게 하기 */}
        <div className='flex-1'>
          {/* subpage 에 있는 컴포넌트 */}
          {children}
        </div>
      </div>
    </>
  )
}

export default Sidebar