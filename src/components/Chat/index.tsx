import "~/styles/scrollbar.scss";
import React, { useMemo, useRef } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ContactList from "~/components/ContactList";
import InputSection from "~/components/InputSection";
import MessageList from "~/components/MessageList";
import ProfileSection from "~/components/ProfileSection";
import ChatContext from "~/core/context";
import { getLastMessages } from "~/core/message";
import type { IMessage } from "~/types/message";
import DropZone from "../DropZone";

type ChatProps = {
  originUserId: string,
  allMessages: IMessage[],
  onMessageCreate: (roomId: string, content: string, isDummy: boolean) => void,
  activeRoom: string | null,
  onRoomChange: (roomId: string) => void,
  canLoadMessages: (roomId: string) => boolean,
  loadMessages: (roomId: string) => Promise<void>,
  getContactAvatar: (contactId: string) => string,
  getContactName: (contactId: string) => string,
  isContactOnline: (contactId: string) => boolean,
};

const Chat = ({
  originUserId,
  allMessages,
  onMessageCreate,
  activeRoom,
  onRoomChange,
  canLoadMessages,
  loadMessages,
  getContactAvatar,
  getContactName,
  isContactOnline,
}: ChatProps) => {
  const mainSection = useRef<HTMLDivElement>(null);

  const lastMessages = useMemo(() => {
    const messages = getLastMessages(allMessages);
    messages.sort((a, b) => b.timestamp - a.timestamp);
    return messages;
  }, [allMessages]);

  const loadedMessages = useMemo(() => {
    return allMessages.filter(m => m.roomId === activeRoom && m.status !== "dummy");
  }, [allMessages, activeRoom]);

  const contextValue = useMemo(() => ({
    canLoadMessages,
    loadMessages,
    getContactAvatar,
    getContactName,
    isContactOnline,
  }), [
    canLoadMessages,
    loadMessages,
    getContactAvatar,
    getContactName,
    isContactOnline,
  ]);

  return (
    <ChatContext.Provider value={contextValue}>
      <Row className="h-100 gx-2">
        <Col md={5} lg={4} xxl={3} className="h-100 d-none d-md-block">
          <div className="h-100 d-flex flex-column">
            <ProfileSection
              onContactCreate={contactId => onMessageCreate(contactId, "", true)}
            />
            <ContactList
              lastMessages={lastMessages}
              activeRoom={activeRoom}
              activateRoom={onRoomChange}
            />
          </div>
        </Col>
        <Col ref={mainSection} md={7} lg={8} xxl={9} className="h-100 position-relative">
          {activeRoom && mainSection.current &&
            <DropZone
              container={mainSection.current}
              submit={message => onMessageCreate(activeRoom, message, false)}
            />
          }
          <div className="h-100 d-flex flex-column gap-3">
            <MessageList
              originUserId={originUserId}
              roomId={activeRoom}
              collection={loadedMessages}
            />
            {activeRoom && <InputSection submit={message => onMessageCreate(activeRoom, message, false)} />}
          </div>
        </Col>
      </Row>
    </ChatContext.Provider>
  );
};

export default Chat;
