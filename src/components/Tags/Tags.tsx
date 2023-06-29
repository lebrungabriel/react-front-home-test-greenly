import { Tag } from "./Tag";
import { TagType } from "../../types/TagType";

export const Tags = ({ tags }: { tags: TagType[] }) => {
  return (
    <div
      style={{
        margin: "10px",
        padding: "5px",
        backgroundColor: "red",
        borderRadius: "3px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {tags.map((obj) => (
        <Tag tag={obj} />
      ))}
    </div>
  );
};
