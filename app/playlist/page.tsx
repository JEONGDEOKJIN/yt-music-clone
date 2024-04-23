import HeaderBgChager from "@/components/HeaderBgChager";
import PlayListHead from "@/components/PlayListHead";
import SongCard from "@/components/SongCard";
import SongCardRowExpand from "@/components/SongCardRowExpand";
import { getPlaylistById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";
import React from "react";

interface PlaylistPageProps {
  searchParams: {
    list: string; // 이렇게 들어간 이유는, props.searchParams.list 이렇게 객체 안에 > 프로퍼티 > 안에 list 가 있기 때문
  };
}

const page = async (props: PlaylistPageProps) => {
  console.log("props.searchparams.list🟩🟩🟩", props);
  const playlist = await getPlaylistById(Number(props.searchParams.list));
  console.log(playlist);

  if (!playlist) permanentRedirect("/");

  // 해당 데이터가 있다면, 배경으로 랜덤이미지를 깔아준다.
  const imageSrc = getRandomElementFromArray(playlist.songList)?.imageSrc;

  return (
    <>
      {/* // imageSrc 를 바탕으로, 이미지를 바꿔주는 컴포넌트 만들기 */}
      
      {/* 이걸 지금, playlist 페이지에서 그대로 가져가서 재사용 함⭐⭐ */}
      <HeaderBgChager imageSrc={imageSrc} />

      <div className="mt-12"></div>
      <PlayListHead playlist={playlist} />
      <div>playlist page : {props.searchParams.list}</div>
      <div className="mt-12"></div>
      <section className="flex flex-col gap-2">
        {playlist.songList.map((song, idx) => {
          return <SongCardRowExpand song={song} key={idx} />;
        })}
      </section>
    </>
  );
};

export default page;
