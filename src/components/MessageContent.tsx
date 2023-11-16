import { faFileCircleExclamation } from "@fortawesome/free-solid-svg-icons/faFileCircleExclamation";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons/faFileExcel";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons/faFilePdf";
import { faFileWord } from "@fortawesome/free-solid-svg-icons/faFileWord";
import { faFileZipper } from "@fortawesome/free-solid-svg-icons/faFileZipper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type MessageContentProps = {
  content: string,
};

const MessageContent = ({
  content,
}: MessageContentProps) => {
  if (/^data:image\/(jpeg|jpg|png|gif|svg\+xml);base64,/.test(content)) {
    return <img className="mb-1" src={content} />;
  }
  if (/^data:application\/pdf;base64,/.test(content)) {
    return (
      <a href={content} download="document.pdf">
        <FontAwesomeIcon icon={faFilePdf} size="4x" className="fa-fw mb-2" />
      </a>
    );
  }
  if (/^data:application\/vnd.(ms-excel|openxmlformats-officedocument\.spreadsheetml.(sheet|template));base64,/.test(content)) {
    return (
      <a href={content} download="sheet.xlsx">
        <FontAwesomeIcon icon={faFileExcel} size="4x" className="fa-fw mb-2" />
      </a>
    );
  }
  if (/^data:application\/vnd.(msword|openxmlformats-officedocument\.wordprocessingml.(document|template));base64,/.test(content)) {
    return (
      <a href={content} download="document.docx">
        <FontAwesomeIcon icon={faFileWord} size="4x" className="fa-fw mb-2" />
      </a>
    );
  }
  if (/^data:application\/zip;base64,/.test(content)) {
    return (
      <a href={content} download="archive.zip">
        <FontAwesomeIcon icon={faFileZipper} size="4x" className="fa-fw mb-2" />
      </a>
    );
  }
  if (/data:.*?;base64,/.test(content)) {
    return <FontAwesomeIcon icon={faFileCircleExclamation} size="4x" className="fa-fw mb-2" />;
  }
  return <span>{content}</span>;
};

export default MessageContent;
