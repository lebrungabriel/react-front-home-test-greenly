import { Tag } from "./Tag";
import { TagType } from "../../types/TagType";
import TuneIcon from "@mui/icons-material/Tune";

export const Tags = ({ tags }: { tags: TagType[] }) => {
  const filteredTags = tags.filter((tag) => tag.type !== "menu");

  return (
    <div className="w-[95%] mx-auto h-[80px] shadow flex items-center md:justify-center mb-10 overflow-scroll px-4">
      <TuneIcon className="mr-4" style={{ fontSize: "30px" }} />
      {/* <h1 className="mr-4">Filtres</h1> */}
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
