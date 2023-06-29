import { Tag } from "./Tag";
import { TagType } from "../../types/TagType";

export const Tags = ({ tags }: { tags: TagType[] }) => {
  return (
    <div className="w-full h-[100px] bg-white flex justify-evenly items-center">
      {tags.map((obj) => (
        <Tag tag={obj} enableCursorPointer={true} />
      ))}
    </div>
  );
};
