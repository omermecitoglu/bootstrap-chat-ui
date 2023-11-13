import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type MessageContentProps = {
  content: string,
};

const MessageContent = ({
  content,
}: MessageContentProps) => {
  const isImage = /^data:image\/(png|jpg|jpeg|gif);base64,/.test(content);
  const isPDF = /^data:application\/pdf;base64,/.test(content);
  if (isImage) {
    return <img className="mb-1" src={content} />;
  }
  if (isPDF) {
    return (
      <a href={content} download="document.pdf">
        <FontAwesomeIcon icon={faFilePdf} size="5x" className="fa-fw mb-2" />
      </a>
    );
  }
  return <span>{content}</span>;
};

export default MessageContent;
