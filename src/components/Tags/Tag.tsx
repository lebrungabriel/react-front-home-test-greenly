import { useState } from "react";
import { TagType } from "../../types/TagType";

export const Tag = ({
  tag,
  enableCursorPointer,
}: {
  tag: TagType;
  enableCursorPointer: boolean;
}) => {
  const [selectedTag, setSelectedTag] = useState("");
  const cursorPointerClass = enableCursorPointer ? "cursor-pointer" : "";
  return (
    <div
      className={`w-[100px] bg-white shadow py-1 rounded-2xl border border-gray-200 text-gray-500 font-thin ${cursorPointerClass}`}
    >
      {tag.name.fr}
    </div>
  );
};
