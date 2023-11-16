import React, { useState } from "react";
import type { IMessage } from "~/types/message";
import Chat from ".";

type TemplateProps = {
  originUserId: string,
  initialMessages: IMessage[],
  canLoadMessages: (roomId: string) => boolean,
  getContactAvatar: (contactId: string) => string,
  getContactName: (contactId: string) => string,
  isContactOnline: (contactId: string) => boolean,
};

const Template = ({
  originUserId,
  initialMessages,
  canLoadMessages,
  getContactAvatar,
  getContactName,
  isContactOnline,
}: TemplateProps) => {
  const [messages, setMessages] = useState(initialMessages);
  const [activeRoom, setActiveRoom] = useState<string | null>(null);

  const handleNewMessage = (roomId: string, content: string, isDummy: boolean) => {
    const messageId = Date.now().toString();
    setMessages(m => [...m, {
      id: messageId,
      content,
      roomId: roomId,
      authorId: originUserId,
      timestamp: Date.now(),
      status: isDummy ? "dummy" : "created",
    }]);
    if (!isDummy) {
      setTimeout(() => {
        setMessages(msgs => {
          return msgs.map(msg => msg.id === messageId ? ({
            ...msg,
            status: "delivered",
          }) : msg);
        });
      }, 3000);
      setTimeout(() => {
        setMessages(msgs => {
          return msgs.map(msg => msg.id === messageId ? ({
            ...msg,
            status: "seen",
          }) : msg);
        });
      }, 6000);
    }
  };

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const loadMoreMessages = async (roomId: string): Promise<void> => {
    const now = Date.now();
    await sleep(1000);
    const moreMessages = Array(10).fill(null).map<IMessage>((n, idx) => ({
      id: (now - idx).toString(),
      content: "loaded message " + idx,
      roomId,
      authorId: originUserId,
      timestamp: now - idx,
      status: "seen",
    }));
    setMessages(msgs => [...moreMessages, ...msgs]);
  };

  return (
    <Chat
      originUserId={originUserId}
      allMessages={messages}
      onMessageCreate={handleNewMessage}
      activeRoom={activeRoom}
      onRoomChange={setActiveRoom}
      canLoadMessages={canLoadMessages}
      loadMessages={loadMoreMessages}
      getContactAvatar={getContactAvatar}
      getContactName={getContactName}
      isContactOnline={isContactOnline}
    />
  );
};

export default Template;
