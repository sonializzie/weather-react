import React from "react";

export default function FormattedDate(props) {
  let months = [
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

  let currentYear = props.date.getFullYear();
  let currentMonth = months[props.date.getMonth()];
  let currentDate = props.date.getDate();

  let hours = props.date.getHours();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {hours}:{minutes} | {currentDate} {currentMonth} {currentYear}
    </div>
  );
}
