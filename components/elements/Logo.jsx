"use client";

import React from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import IconButton from "./IconButton"
import { useRouter } from "next/navigation";
// https://react-icons.github.io/react-icons/search/#q=hamb 에서 가져오기

import { IoCloseOutline } from "react-icons/io5";


const Logo = ({isInDrawer = false} , onClickClose = () => {}) => {
  // onClick 이벤트를 처리해야 하기 때문에, CSR 필요
  // 리액트 컴포넌트는 서버에서 HTML 로 바꾸고(SSR 하고), 이벤트 처리를 CSR 에서 할 것

  const { push } = useRouter(); // ✅ 두 번째에 있는 app Router 용 useRouter 로 설정해야 함

  const onClickLogo = () => {
    // home으로 이동하는 로직
    push('/')
  };

  const onClickMenu = () => {
    console.log("클릭")
  }


  return (
    <section className="flex flex-row items-center gap-3">
    { 
      isInDrawer ? (
        <IconButton   
          onClickIcon={onClickMenu}
          icon = { <RxHamburgerMenu size={24} /> }
        />
      ) : (
        <IconButton   
          onClickIcon={onClickClose}
          icon = { <IoCloseOutline size={30} /> }
        />
      )

    }

      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image width={90} height={30} alt="logo" src="/main-logo.svg" />
      </div>
    </section>
  );
};

export default Logo;
