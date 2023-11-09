import React, { useEffect, useRef } from "react";
import Message from "~/components/Message";
import type { IMessage } from "~/types/message";

type MessageListProps = {
  originUserId: string,
  collection: IMessage[],
};

const MessageList = ({
  originUserId,
  collection,
}: MessageListProps) => {
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scroller.current) {
      scroller.current.scrollTop = scroller.current.scrollHeight;
    }
  }, [collection.length]);

  return (
    <div ref={scroller} className="h-100 bg-primary-subtle px-4 py-1 overflow-y-scroll cool-scrollbar">
      {collection.map((message, index) =>
        <Message
          key={message.id}
          {...message}
          original={message.authorId === originUserId}
          prevDifferent={message.authorId !== (collection[index - 1] || {}).authorId}
          nextDifferent={message.authorId !== (collection[index + 1] || {}).authorId}
        />
      )}
    </div>
  );
};

export default MessageList;
