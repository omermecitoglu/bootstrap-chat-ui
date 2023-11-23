import "./EmojiBox.scss";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import Overlay from "react-bootstrap/Overlay";
import getCaretCoordinates from "textarea-caret";
import DynamicPopover from "~/components/DynamicPopover";
import { type Emoji, findEmojis } from "~/core/emoji";

type EmojiBoxProps = {
  textarea: HTMLTextAreaElement,
  keyword: string,
  gridSize: number,
  submit: (emoji: string) => void,
};

const EmojiBox = ({
  textarea,
  keyword,
  gridSize,
  submit,
}: EmojiBoxProps) => {
  const target = useRef<HTMLDivElement>(null);
  const [caretPos, setCaretPos] = useState<{ top: number, left: number }>({ top: 0, left: 0 });
  const [availableEmojis, setAvailableEmojis] = useState<Emoji[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!keyword) return;
    const coords = getCaretCoordinates(textarea, textarea.selectionStart);
    setCaretPos({
      top: coords.top - textarea.scrollTop - coords.height / 6,
      left: coords.left,
    });
    setAvailableEmojis(findEmojis(keyword, Math.pow(gridSize, 2)));
  }, [keyword, gridSize]);

  useEffect(() => {
    if (!availableEmojis.length) return;

    setActiveIndex(idx => Math.min(Math.max(idx, 0), availableEmojis.length - 1));

    const fixedIndex = (actualIndex: number, expectedIndex: number) => {
      const newIndex = Math.min(Math.max(expectedIndex, 0), availableEmojis.length - 1);
      return expectedIndex === newIndex ? expectedIndex : actualIndex;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (["Enter", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) {
        e.preventDefault();
      }
      if (e.key === "Enter") {
        e.stopPropagation();
        submit(availableEmojis[activeIndex].content);
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex(idx => fixedIndex(idx, idx % gridSize === 0 ? idx : idx - 1));
      }
      if (e.key === "ArrowRight") {
        setActiveIndex(idx => fixedIndex(idx, idx % gridSize === gridSize - 1 ? idx : idx + 1));
      }
      if (e.key === "ArrowUp") {
        setActiveIndex(idx => fixedIndex(idx, idx - gridSize));
      }
      if (e.key === "ArrowDown") {
        setActiveIndex(idx => fixedIndex(idx, idx + gridSize));
      }
    };

    textarea.addEventListener("keydown", handleKeyDown);

    return () => {
      textarea.removeEventListener("keydown", handleKeyDown);
    };
  }, [availableEmojis, activeIndex, gridSize]);

  return (
    <>
      <div ref={target} className="position-absolute" style={caretPos} />
      {target.current && !!availableEmojis.length &&
        <Overlay target={target.current} show={true} placement="top">
          {(props) => (
            <DynamicPopover updateCriteria={keyword.length} {...props}>
              <div className="emoji-grid" style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}>
                {availableEmojis.map((emoji, index) =>
                  <span key={emoji.slug} className={classNames(activeIndex === index && "active")}>
                    {emoji.content}
                  </span>
                )}
              </div>
            </DynamicPopover>
          )}
        </Overlay>
      }
    </>
  );
};


export default EmojiBox;
