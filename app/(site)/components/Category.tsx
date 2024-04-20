"use client";
import { cn } from "@/lib/utils";

import React from "react";
import useUIState from "@/hooks/useUIState";

import { homeCategoryList } from "@/lib/dummyData";

const Category = () => {
  // store 및 setter 가져오기
  const { homeCategory, headerImageSrc, setHomeCategory, setHeaderImageSrc } =
    useUIState();

  const onClickCategory = (item: any) => {
    if (homeCategory === item.label) {
      // 해제 하는 경우 | 이런 걸 분기 처리 라고 하는 구나! ⭐⭐⭐
      headerImageSrc("");
      homeCategory("");
    } else {
      // 선택한 경우
      setHeaderImageSrc(item.src); // 이미지 소스가 들어감
      setHomeCategory(item.label);
    }
  };

  homeCategoryList;

  return (
    <ul className="max-w-full overflow-x-auto flex flex-row gap-4 ">
      {homeCategoryList.map((item, index) => {
        return (
          <li
            onClick={() => onClickCategory(item)}
            className={cn(
              "h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent bg-[rgba(147,147,147,0.2)]  hover:bg-[rgba(147,147,147,0.45)] cursor-pointer rounded-lg ",
              item.label === homeCategory &&
                "bg-white text-black hover:bg-white"
            )}
            key={item.label}
          >
            {item.label}
          </li>
        );
      })}
    </ul>
  );
};

export default Category;
