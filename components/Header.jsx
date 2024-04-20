"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import UserIcon from "@/components/UserIcon";
import PagePadding from "@/components/PagePadding";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import cn from "classnames";
import useUIState from "@/hooks/useUIState";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Logo from "./elements/Logo";
import Navigator from "./elements/Navigator";

const HeaderDrawer = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-[240px] h-full">
        <div className="py-3">
          <div className="px-3">
            <Logo />
          </div>
        </div>

        <Navigator />
      </DrawerContent>
    </Drawer>
  );
};

const Header = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { headerImageSrc } = useUIState();

  const headRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = headRef?.current?.scrollTop;
      console.log("scroll value :", scrollValue);
      setIsScrolled(scrollValue !== 0);
      /*
        scrollValue == 0 이면 -> 스크롤이 최상단에 있는 상태
        scrollValue !== 0 이면 -> 스크롤이 내려가 있는 상태
      */
    };

    headRef?.current?.addEventListener("scroll", handleScroll);

    // 클린업
    return () => {
      headRef?.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={headRef} className="relative overflow-y-auto w-full h-full">
      <section className="absolute top-0 w-full">
        {/* 사진이 꽉 차게 할 것임. 이때, 반드시 relative 를 잡아줘야 함 : 왜? */}
        <div className="relative h-[400px] w-full">
          <Image
            fill
            alt="mediaItem"
            className="object-cover"

            // 이미지가 없으면, 기본 이미지를 주기 
            src= {headerImageSrc || "https://images.unsplash.com/photo-1612999754243-3745bba6c302?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
          />
          <div className="absolute h-[400px] top-0 bg-black opacity-5 w-full " />
          <div className="absolute h-[400px] top-0 bg-gradient-to-t from-black  w-full " />
        </div>
      </section>

      {/* sticky 를 이렇게 주면, 스크롤 내렸을 때 붙어있게 된다⭐⭐⭐ */}
      <section
        className={cn("sticky top-0 left-0 z-10", isScrolled && "bg-black")}
      >
        <PagePadding>
          <div className="flex flex-row justify-between items-center h-[64px] ">
            <article className="h-[42px] min-w-[480px] hidden lg:flex flex-row items-center  bg-[rgba(0,0,0,0.30)] text-[rgba(200,200,200,200.30)] rounded-2xl px-[16px] gap-[16px] border border-neutral-500 ">
              <div>
                <FiSearch size={24} />{" "}
              </div>
              <input
                type="text"
                className="h-full w-full bg-transparent"
                placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
              />
            </article>
            <HeaderDrawer>
              <article className="lg:hidden">
                {/* drawer 상태를 이렇게 주는구나⭐⭐⭐⭐⭐ */}
                <Logo
                  isInDrawer
                  onClickClose={() => {
                    setIsOpen(false);
                  }}
                />
              </article>
            </HeaderDrawer>
            <article className="flex flex-row gap-6 items-center">
              <FaChromecast size={26} />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className="relative"> {children} </section>
    </header>
  );
};

export default Header;
