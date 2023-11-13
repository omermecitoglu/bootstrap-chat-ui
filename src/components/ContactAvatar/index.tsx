import "./ContactAvatar.scss";
import classNames from "classnames";
import React, { useContext } from "react";
import ChatContext from "~/core/context";

type ContactAvatarProps = {
  size: string,
  id: string,
  className?: string,
};

const ContactAvatar = ({
  size,
  id,
  className,
}: ContactAvatarProps) => {
  const { getContactAvatar, getContactName, isContactOnline } = useContext(ChatContext);
  const isOnline = isContactOnline(id);
  return (
    <div
      className={classNames("contact-avatar", className)}
      style={{ width: size, height: size }}
    >
      <img
        src={getContactAvatar(id)}
        alt={getContactName(id)}
        className={classNames("contact-avatar__image", isOnline && "contact-avatar__image--online")}
      />
    </div>
  );
};

export default ContactAvatar;
