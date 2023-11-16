import { createContext } from "react";

type Context = {
  canLoadMessages: (roomId: string) => boolean,
  loadMessages: (roomId: string) => Promise<void>,
  getContactAvatar: (id: string) => string,
  getContactName: (id: string) => string,
  isContactOnline: (id: string) => boolean,
};

const ChatContext = createContext<Context>({
  canLoadMessages: () => false,
  loadMessages: () => Promise.resolve(),
  getContactAvatar: () => "",
  getContactName: () => "",
  isContactOnline: () => false,
});

export default ChatContext;
