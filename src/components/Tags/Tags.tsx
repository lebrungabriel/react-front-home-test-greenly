import { Tag } from "./Tag";
import { TagType } from "../../types/TagType";

export const Tags = ({ tags }: { tags: TagType[] }) => {
  return (
    <div className="w-full h-[140px] flex justify-evenly items-center mb-10">
      {tags.map((obj) => (
        <Tag tag={obj} enableCursorPointer={true} />
      ))}
    </div>
  );
};
