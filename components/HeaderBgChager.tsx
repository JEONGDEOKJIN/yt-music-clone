"use client";

import useUIState from "@/hooks/useUIState";
import React, { useEffect } from "react";

const HeaderBgChager = ({ imageSrc }: any) => {
  const { setHeaderImageSrc } = useUIState();

  useEffect( () => {
    if(imageSrc) setHeaderImageSrc(imageSrc);
  } , [imageSrc])

  return <></>;
};

export default HeaderBgChager;
