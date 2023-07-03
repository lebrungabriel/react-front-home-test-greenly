import { Tag } from "./Tag";
import { TagType } from "../../types/TagType";

export const Tags = ({ tags }: { tags: TagType[] }) => {
  const filteredTags = tags.filter((tag) => tag.type !== "menu");
  return (
    <div className="w-full h-[140px] flex justify-evenly items-center mb-10">
      {filteredTags.map((obj) => (
        <Tag key={obj.id} tag={obj} enableCursorPointer={true} />
      ))}
    </div>
  );
};
