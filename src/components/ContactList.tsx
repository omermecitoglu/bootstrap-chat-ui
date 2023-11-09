import React from "react";
import Contact from "~/components/Contact";
import type { IMessage } from "~/types/message";

type ContactListProps = {
  lastMessages: IMessage[],
  activeRoom: string | null,
  activateRoom: (id: string) => void,
};

const ContactList = ({
  lastMessages,
  activeRoom,
  activateRoom,
}: ContactListProps) => (
  <div className="pe-3 h-100 overflow-y-scroll cool-scrollbar">
    {lastMessages.map(message =>
      <Contact
        key={message.id}
        lastMessage={message}
        active={activeRoom === message.roomId}
        activate={activateRoom}
      />
    )}
  </div>
);

export default ContactList;
