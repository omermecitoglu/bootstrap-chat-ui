import "./DropZone.scss";
import React, { useEffect, useState } from "react";
import { convertFileToBase64 } from "~/core/base64";
import { getTransferredFiles } from "~/core/drag-n-drop";

type DropZoneProps = {
  container: HTMLDivElement,
  submit: (text: string) => void,
};

const DropZone = ({
  container,
  submit,
}: DropZoneProps) => {
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleDragOver = (e: DragEvent) => {
      if (!e.dataTransfer || !e.dataTransfer.items.length) return;
      if (!Array.from(e.dataTransfer.items).find(i => i.kind === "file")) return;
      setIsDragging(true);
    };

    container.addEventListener("dragover", handleDragOver);

    return () => {
      container.removeEventListener("dragover", handleDragOver);
    };
  }, [container]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = await getTransferredFiles(e.dataTransfer);
    for (const file of files) {
      const base64 = await convertFileToBase64(file);
      submit(base64);
    }
  };

  return isDragging && (
    <div
      className="drop-zone"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div>Drop your files or folders here</div>
    </div>
  );
};

export default DropZone;
