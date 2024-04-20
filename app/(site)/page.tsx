import { getRandomInt, sleep } from "@/lib/utils";
import React from "react";
import Category from "./components/Category";
import PagePadding from "@/components/PagePadding";
import { Play } from "next/font/google";
import PlayListCarousel from "@/components/PlayListCarousel";
import { dummyPlaylistArray } from "@/lib/dummyData";
import UserIcon from "@/components/UserIcon";

const page = async () => {
  // console.log("1️⃣ before sleep")

  // // '서버에 갔다 오는 시간' 을 이렇게 테스트 해볼 수도? | 비동기 처리를 이렇게 해볼수도?
  // await sleep(5000) // 2초 대기(비동기 처리) 후 동기 처리(아래 코드 실행)

  console.log("2️⃣ after sleep");
  // throw new Error("my error")

  const dummyPlayListArray1 = [...dummyPlaylistArray];

  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-9"></div>
        <Category />

        <div className="mt-20"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlayListArray1]}
          Thumbnail={
            <div className="w-[56px] h-[56px]">
              <UserIcon size="lg" />
            </div>
          }
          title="다시 듣기"
          subTitle="부시맨"
        />
      </div>
    </PagePadding>
  );
};

export default page;
