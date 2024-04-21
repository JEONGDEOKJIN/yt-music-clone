import React, { ReactNode } from "react";
import Logo from "./elements/Logo";
import Navigator from "./elements/Navigator";
import LogoComponent from "./elements/LogoComponent";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <>
      {/* ⭐⭐h-full 이후 -  global.css > body 에 height 를 100vh 를 줘서 꽉 차게 함  */}
      <div className="flex flex-row h-full  ">
        {/* sidebar */}
        <nav className="hidden lg:block  w-[240px] border-r-[1px] border-neutral-600">
          <div className="p-[24px]">
            <Logo />
          </div>
          <div>
            <Navigator />
          </div>
        </nav>

        {/* 단순히 flex-grow 1 만 주지 않고, flex-shrink 1 을 줘서, 줄어들어도, 옆으로 끝가지 먹고 있게 하기 */}
        {/* <div className='flex-1'> */}
        {/* subpage 에 있는 컴포넌트 */}

        {/* <div className='flex-1'> 
          이렇게 flex-1 을 하면, sidebar 가, pc 화면이 되었을 때, 원하지 않게 찌그러지는 모습이 나옴
          왜냐면, 옆에 있는 sidbar 옆에 있는 콘텐츠가 flex-1 으로 설정하면 -> 빈 공간을 다 먹으니까. 
          이건, flex-1 이 가변적이어서 그러함 -> so, 고정적인 크기 설정을 해줘야 함 
        */}

        {/* 현재, sidebar 옆에 있는 콘텐츠영역이, sidebar 제외하고 고정되게 설정 ⭐⭐⭐ 
            이때, 퍼센트(%)를 이용하는데 -> 이 퍼센트를, 원하는 고정되었으면 하는 다단이 아니라, 그 옆에 content 에 걸어주는 구나
        */}
        <div className=" w-full lg:w-[calc(100%-240px)]">{children}</div>
      </div>
    </>
  );
};

export default Sidebar;
