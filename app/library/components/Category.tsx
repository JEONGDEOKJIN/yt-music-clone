"use client";

import { cn } from "@/lib/utils";
import React from "react";
import useUIState from "@/hooks/useUIState";
import { homeCategoryList } from "@/lib/dummyData";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { AiFillCaretDown } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

const Category = () => {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  const libraryCategory = ["재생목록", "팟캐스트", "노래", "앨범", "아티스트"];

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
    <div className="flex flex-row justify-between items-center gap-4 flex-wrap">
      <ul className="max-w-full overflow-x-auto flex flex-row gap-4 ">
        {libraryCategory.map((item, index) => {
          return (
            <li
              // onClick 은 category 의 경우, 지금 구현하지는 않음 ✅
              // onClick={() => onClickCategory(item)}
              //   className={cn(
              //     "h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent bg-[rgba(147,147,147,0.2)]  hover:bg-[rgba(147,147,147,0.45)] cursor-pointer rounded-lg ",
              //     item === homeCategory &&
              //       "bg-white text-black hover:bg-white"
              //   )}
              //   key={index}
              // >
              key={index}
              className={cn(
                "h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent bg-[rgba(147,147,147,0.2)]  hover:bg-[rgba(147,147,147,0.45)] cursor-pointer rounded-lg "
              )}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              className="w-[162px] h-[42px] flex flex-row justify-between items-center p-4
              bg-neutral-700 border border-neutral-600 rounded-3xl text-[14px] 
            "
            >
              <div>최근활동</div>
              <div>
                <AiFillCaretDown />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[300px] bg-neutral-800 ">
            <DropdownMenuLabel className="p-4">정렬기준</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-neutral-700" />
            <DropdownMenuCheckboxItem
              className="p-4"
              // checked={showStatusBar}  // 우선, 체크되는 로직은 나중에!
              // onCheckedChange={setShowStatusBar}
            >
              <span className="min-w-[40px]">
                <FiCheck size={20} />
              </span>
              최근 활동
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              className="p-4"
              // checked={showActivityBar}
              // onCheckedChange={setShowActivityBar}
              // disabled // 안 보이게 하는 기능임. 우선 이번에는 비활성화
            >
              <span className="min-w-[40px]">
              </span>
              최근에 저장됨
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              className="p-4"
              // checked={showPanel}
              // onCheckedChange={setShowPanel}
            >
              <span className="min-w-[40px]">
              </span>
              최근 재생한 음악
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Category;
