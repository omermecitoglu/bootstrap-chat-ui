import classNames from "classnames";
import React, { useMemo } from "react";

type MessageTimeProps = {
  timestamp: number,
  className?: string,
};

const MessageTime = ({
  timestamp,
  className,
}: MessageTimeProps) => {
  const time = useMemo(() => {
    const date = new Date(timestamp);
    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    return hour + ":" + minute;
  }, [timestamp]);
  return <small className={classNames(className, "text-muted lh-1")}>{time}</small>;
};

export default MessageTime;
