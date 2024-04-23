import HeaderBgChager from "@/components/HeaderBgChager";
import PagePadding from "@/components/PagePadding";
import DarkButton from "@/components/elements/DarkButton";
import WhiteButton from "@/components/elements/WhiteButton";
import { getChannelById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";
import React from "react";
import { FiMusic, FiShuffle } from "react-icons/fi";

interface ChannelPageProps {
  params: {
    id: string;
  };
}

const page = async (props: ChannelPageProps) => {
  const channel = await getChannelById(Number(props.params.id));

  console.log("channel", channel);

  if (!channel) permanentRedirect("/");

  const imageSrc = getRandomElementFromArray(channel.songList)?.imageSrc;

  console.log(props, "props");
  console.log(props.params.id, "props.params.id");

  return (
    <PagePadding>
      {/* ⭐⭐⭐ 이게, channel 페이지에서 복사해서, 재활용하는 컴포넌트 라는 것!  */}
      <HeaderBgChager imageSrc={imageSrc} />

      <div className="mt-[150px]"></div>

      <section>
        <div className="text-[28px] font-bold">{channel.name}</div>

        {/* 모바일 */}
        <article className="lg:hidden mt-4">
          <div>
            <DarkButton
              className={"w-[150px] flex justify-center"}
              label={"구독중 4.18만"}
            />
          </div>
          <div className="flex flex-row gap-4 mt-4">
            <WhiteButton label={"셔플"} icon={<FiShuffle size={16} />} />
            <WhiteButton label={"뮤직 스테이션"} icon={<FiMusic size={16} />} />
          </div>
        </article>

        {/* pc */}
        <div className="hidden lg:flex flex-row items-center gap-4 text-[14px] mt-4">
          <WhiteButton label={"셔플"} icon={<FiShuffle size={16} />} />
          <WhiteButton label={"뮤직 스테이션"} icon={<FiMusic size={16} />} />
          <DarkButton
            className={"w-[150px] flex justify-center"}
            label={"구독중 4.18만"}
          />
        </div>
      </section>
      <section>노래</section>
      <section>앨범</section>

      <div>channel/{props.params.id}</div>
    </PagePadding>
  );
};

export default page;
