import { Tag } from "./Tag";
import { TagType } from "../../types/TagType";

export const Tags = ({ tags }: { tags: TagType[] }) => {
  const filteredTags = tags.filter((tag) => tag.type !== "menu");

  return (
    <div className="w-screen h-[140px] flex justify-center items-center mb-10">
      <h1 className="mr-2">Filtres :</h1>
      {filteredTags.map((obj, index) => (
        <Tag
          key={obj.id}
          tag={obj}
          enableCursorPointer={true}
          className={index !== filteredTags.length - 1 ? "mr-2" : ""}
        />
      ))}
    </div>
  );
};
