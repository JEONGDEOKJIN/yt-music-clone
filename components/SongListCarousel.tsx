import { TopSong } from "@/types";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PlayListCard from "./PlayListCard";
import { chunkArray } from "@/lib/utils";
import SongCard from "./SongCard";

interface SongListCarouselProps {
  title: string;
  subTitle?: string;
  Thumbnail?: React.ReactNode;
  songListTop10: TopSong[];
}

const SongColumn = ({ songList = [] }: { songList: TopSong[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {songList.map((song, idx) => {
        return (
          <div key={idx}>
            <SongCard song={song} />
          </div>
        );
      })}
    </div>
  );
};

const SongListCarousel: React.FC<SongListCarouselProps> = ({
  title,
  subTitle,
  Thumbnail,
  songListTop10,
}) => {
  const chunkedTop10SongList = chunkArray(songListTop10, 4) as TopSong[][];
  // 배열의 배열이면, type 을 Topsong[][] 으로 지정해야 함

  return (
    <div className="w-full">
      <Carousel>
        <div className="flex flex-row justify-between items-end my-2">
          <article className="flex flex-row gap-3">
            {Thumbnail}
            <div className="flex flex-col justify-center">
              <div>
                {subTitle && <div className="text-neutral-500">{subTitle}</div>}
              </div>
              <div className="text-[34px] font-bold leading-[34px]">
                {title}
              </div>
            </div>
          </article>

          <div className="relative left-[-45px]">
            <div className="absolute bottom-[20px]">
              <CarouselPrevious className="right-2" />
              <CarouselNext className="left-2" />
            </div>
          </div>
        </div>

        <CarouselContent className="mt-4">
          {chunkedTop10SongList?.map((songList, index) => {
            return (
              // ⭐⭐⭐ 작은 화면은 2개, 중간 화면은 3개, 큰 화면은 4개, 가장 큰 화면은 5개
              <CarouselItem
                key={index}
                className="lg:basis-1/2"
              >
                <SongColumn songList={songList} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SongListCarousel;
