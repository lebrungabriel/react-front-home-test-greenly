import { useDispatch, useSelector } from "react-redux";
import { addTagNameToStore } from "../../reducers/tag";
import { TagType } from "../../types/TagType";
import { TagState } from "../../reducers/tag";

interface TagProps {
  tag: TagType;
  enableCursorPointer: boolean;
  className?: string; // Add className prop
}

export const Tag = ({
  tag,
  enableCursorPointer,
  className, // Include className prop in the function arguments
}: TagProps) => {
  const cursorPointerClass = enableCursorPointer ? "cursor-pointer" : "";
  const dispatch = useDispatch();

  const handlerSelectTag = (tagName: TagType) => {
    dispatch(addTagNameToStore(tagName));
  };

  const selectedTags = useSelector(
    (state: { tag: TagState }) => state.tag.value
  );

  return (
    <div
      onClick={() => handlerSelectTag(tag)}
      className={`w-[100px] flex justify-center items-center bg-white shadow py-1 rounded-2xl border border-gray-200 text-gray-500 font-light ${cursorPointerClass} ${
        className || ""
      }`}
      style={{
        backgroundColor: selectedTags.tags.includes(tag) ? tag.color : "white",
      }}
    >
      {tag.name.fr}
    </div>
  );
};
