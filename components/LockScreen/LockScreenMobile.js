import React from "react";
import { IoIosFlashlight, IoIosCamera } from "react-icons/io";
import { LockIcon } from "./LockIcon";
import { cn } from "@/lib/utils";

const LockScreenMobile = ({ className }) => {
  function getTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();

    if (hour === 0) hour = 12;
    if (hour > 12) hour = hour - 12;

    minute = minute < 10 ? "0" + minute : minute;

    return hour + ":" + minute;
  }

  function getDate() {
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let date = new Date();
    let day = date.getDay();
    let weekday = weekdays[day];
    let month = months[date.getMonth()];

    return weekday + ", " + day + ". " + month;
  }

  return (
    <div
      className={cn(
        "flex-col h-full w-full justify-between absolute top-0 z-[1001] bg-[url('/images/background.jpeg')] bg-cover bg-[center_bottom]",
        className
      )}
    >
      <div className="flex flex-col items-center mt-8 text-white">
        <LockIcon />
        <p className="text-xl">{getDate()}</p>
        <p className="font-light text-8xl">{getTime()}</p>
      </div>
      <div className="flex justify-between px-12 mb-12">
        <div className="p-3 bg-[rgba(255,255,255,0.3)] rounded-full">
          <IoIosFlashlight className="h-[30px] w-[30px]" />
        </div>
        <div className="p-3 bg-[rgba(255,255,255,0.3)] rounded-full">
          <IoIosCamera className="h-[30px] w-[30px]" />
        </div>
      </div>
    </div>
  );
};

export { LockScreenMobile };
