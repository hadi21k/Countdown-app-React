import React, { useState, useEffect } from "react";
import { getRemainingTimeUntilTimestamp } from "./CountdownTime";
const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};
const CountdownTimer = ({ countdownTimesStampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(getRemainingTimeUntilTimestamp(countdownTimesStampMs));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [countdownTimesStampMs]);
  return (
    <div>
      <h3 className="text-center text-3xl font-bold mb-5">
        Hadi's Birthday :{" "}
      </h3>
      <div className="border md:px-7 px-2 py-4 md:py-12 border-black md:text-2xl text-sm space-x-4 rounded-xl flex items-center justify-center">
        <div>
          <span>{remainingTime.days}</span>
          <span>days</span>
        </div>
        <div>
          <span>{remainingTime.hours}</span>
          <span>hours</span>
        </div>
        <div>
          <span>{remainingTime.minutes}</span>
          <span>minutes</span>
        </div>
        <div>
          <span>{remainingTime.seconds}</span>
          <span>second</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
