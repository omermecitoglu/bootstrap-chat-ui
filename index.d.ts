export type IMessage = {
  id: string,
  content: string,
  roomId: string,
  authorId: string,
  timestamp: number,
  status: "new" | "created" | "delivered" | "read",
};
export type ChatProps = {
  originUserId: string,
  allMessages: IMessage[],
  addMessage: (message: string, roomId: string) => void,
  getContactAvatar: (contactId: string) => string,
  getContactName: (contactId: string) => string,
};
declare const BootstrapChatUI: (props: ChatProps) => React.JSX.Element;
export default BootstrapChatUI;
