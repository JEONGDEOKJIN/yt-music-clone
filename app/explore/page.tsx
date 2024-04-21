import PagePadding from "@/components/PagePadding";
import React from "react";
import Category from "./components/Category";
import { getAllPlaylist, getSongListTop10 } from "@/lib/dummyData";
import PlayListCarousel from "@/components/PlayListCarousel";
import SongListCarousel from "@/components/SongListCarousel";
import GenreListCarousel from "@/components/GenreListCarousel";
import { dummyGenreList } from "@/lib/dummyData";

const page = async () => {
  // API 연결이 2번, 비동기 함수가 2번 호출됨 -> 이걸 Promise.all 로 한번에!!! ⭐⭐⭐⭐⭐
  // const playlistArray = await getAllPlaylist();
  // const songListTop10 = await getSongListTop10();

  const [playlistArray, songListTop10] = await Promise.all([
    getAllPlaylist(),
    getSongListTop10(),
  ]);

  return (
    <PagePadding>
      <div className="mt-4"></div>
      <Category />
      <div className="mt-20"></div>
      <PlayListCarousel playlistArray={playlistArray} title="새 앨범 및 싱글" />
      <div className="mt-20"></div>
      <SongListCarousel songListTop10={songListTop10} title="인기곡" />

      <div className="mt-20"></div>
      <GenreListCarousel genreList = {dummyGenreList} title="분위기 및 장르"/>

      {/* 끌어올릴 때, 이렇게 div 태그를 쓰고, mt 를 자주 사용 */}
      <div className="mt-20"></div>
      <div className="mt-20"></div>
    </PagePadding>
  );
};

export default page;
