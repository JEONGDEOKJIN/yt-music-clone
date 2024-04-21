import { generateRandomHex } from "@/lib/utils";
import React from "react";

const GenreCard = ({ genre }: any) => {
  const hex = generateRandomHex();

  return (
    <>
      <div className="flex flex-row h-[48px] w-full cursor-pointer bg-neutral-800 rounded-lg  ">
        <div
          style={{ backgroundColor: hex }}
          className="h-full w-2 rounded-l-lg"
        ></div>

        <div className="flex justify-center items-center px-4" >{genre}</div>
      </div>
    </>
  );
};

export default GenreCard;
