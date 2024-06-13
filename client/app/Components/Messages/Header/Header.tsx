import { useChatContext } from "@/context/chatContext";
import { useGlobalContext } from "@/context/globalContext";
import { dots, searchIcon } from "@/utils/Icons";
import { formatDateLastSeen } from "@/utils/dates";
import Image from "next/image";
import React from "react";

function Header() {
  const { activeChatData } = useChatContext();
  const { handleFriendProfile, showFriendProfile } = useGlobalContext();

  const { photo, lastSeen } = activeChatData || {};

  const isOnline = true;

  console.log(photo, lastSeen);
  return (
    <div className="p-4 flex justify-between border-b-2 border-white dark:border-[#3C3C3C]/60">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => handleFriendProfile(!showFriendProfile)}
      >
        <Image
          src={photo}
          alt="Profile Picture"
          width={50}
          height={50}
          className="rounded-full aspect-square object-cover border-2 border-[white] dark:border-[#3C3C3C]/65 cursor-pointer
          hover:scale-105 transition-transform duration-300 ease-in-out"
        />

        <div className="flex flex-col">
          <h2 className="font-bold text-xl text-[#454e56] dark:text-white">
            {activeChatData?.name}
          </h2>
          <p className="text-xs text-[#aaa]">
            {isOnline ? "Online" : formatDateLastSeen(lastSeen)}
          </p>
        </div>
      </div>
      <div></div>
      <div className="flex items-center gap-6 text-[#454e56] text-xl">
        <button className="p-1">{searchIcon}</button>
        <button className="p-1">{dots}</button>
      </div>
    </div>
  );
}

export default Header;
