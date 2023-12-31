export type IMessage = {
  id: string,
  content: string,
  roomId: string,
  authorId: string,
  timestamp: number,
  status: "dummy" | "new" | "created" | "delivered" | "seen",
};
export type ChatProps = {
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
declare const BootstrapChatUI: (props: ChatProps) => React.JSX.Element;
export default BootstrapChatUI;
