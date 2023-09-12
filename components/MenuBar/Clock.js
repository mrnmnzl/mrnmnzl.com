"use client";
import React from "react";
import { useState, useEffect } from "react";

const Clock = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const [time, setTime] = useState(new Date());

  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  function formatTime(current) {
    let day = weekday[current.getDay()];
    let hour = current.getHours();
    let minute = current.getMinutes();
    let dayNum = current.getDate();
    let monthNum = current.getMonth();

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;

    let time =
      day + " " + dayNum + ". " + month[monthNum] + " " + hour + ":" + minute;

    return time;
  }

  return <span className="m-0 text-[13px]">{formatTime(time)}</span>;
};

export { Clock };
