import React from "react";

const Clock = () => {
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

  function showTime() {
    let date = new Date();
    let day = weekday[date.getDay()];
    let hour = date.getHours();
    let minute = date.getMinutes();
    let dayNum = date.getDate();
    let monthNum = date.getMonth();

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;

    let time =
      day + " " + dayNum + ". " + month[monthNum] + " " + hour + ":" + minute;

    return time;
  }

  return <span className="m-0 text-[13px]">{showTime()}</span>;
};

export { Clock };
