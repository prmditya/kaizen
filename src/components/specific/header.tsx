"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AiFillCalendar, AiFillClockCircle } from "react-icons/ai";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Header = () => {
  const [currentTime, setCurrentTime] = useState("");

  const getFormattedDate = () => {
    const date = new Date();
    const month = date.getMonth() + 1; // getMonth() returns 0-11
    const day = date.getDate();
    return `${month.toString().padStart(2, "0")}月${day
      .toString()
      .padStart(2, "0")}日`;
  };

  const updateTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    setCurrentTime(`${hours}:${minutes}`);
  };

  useEffect(() => {
    // Update time immediately
    updateTime();

    // Update time every minute
    const interval = setInterval(updateTime, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-6 h-[45px]">
      <div className="neu flex items-center gap-1 px-4 py-2 font-bold">
        <AiFillCalendar />
        <span>{getFormattedDate()}</span>
      </div>

      <div className="neu flex items-center justify-center px-4 py-2 gap-1 font-bold">
        <AiFillClockCircle />
        <span>{currentTime}</span>
      </div>

      <div className="neu flex items-center gap-2 px-4 py-2 flex-1">
        <FaMagnifyingGlass className="text-gray-500 w-4 h-4" />
        <Input
          type="text"
          placeholder="Search..."
          aria-label="Search"
          className="border-none shadow-none focus-visible:ring-0 p-0 h-auto"
        />
      </div>

      <Avatar className="neu w-[45px] h-[45px]">
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/178291318?v=4"
          alt="User avatar"
        />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>
  );
};

export { Header };
