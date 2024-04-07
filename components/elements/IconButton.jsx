import React from "react";

const IconButton = ({icon , onClickIcon = () => {}}) => {
  return (
    <>
      <div
        onClick={onClickIcon}
        className="flex justify-center items-center w-[36px] h-[36px] hover:bg-[rgba(150,150,150,0.45)] rounded-full cursor-pointer"
      >
        {icon}
      </div>
    </>
  );
};

export default IconButton;
