export type IMessage = {
  id: string,
  content: string,
  roomId: string,
  authorId: string,
  timestamp: number,
  status: "dummy" | "new" | "created" | "delivered" | "read",
}
