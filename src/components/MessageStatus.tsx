import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons/faCheckDouble";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";

type MessageStatusProps = {
  current: "dummy" | "new" | "created" | "delivered" | "read",
};

const MessageStatus = ({
  current,
}: MessageStatusProps) => {
  return current === "new" ? null : (
    <FontAwesomeIcon
      icon={["delivered", "read"].includes(current) ? faCheckDouble : faCheck}
      size="sm"
      className={classNames("fa-fw", current === "read" ? "text-primary" : "text-secondary")}
    />
  );
};

export default MessageStatus;
