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
  const { getContactAvatar, getContactName } = useContext(ChatContext);
  return (
    <div className={className} style={{ width: size, height: size }}>
      <img
        src={getContactAvatar(id)}
        alt={getContactName(id)}
        className="rounded-circle w-100 h-100 object-fit-cover"
      />
    </div>
  );
};

export default ContactAvatar;
