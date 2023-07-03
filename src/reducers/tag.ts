import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TagType } from "../types/TagType";

export type TagState = {
  value: {
    tags: TagType[];
    activeMenu: string;
  };
};

const initialState: TagState = {
  value: { tags: [], activeMenu: "all" },
};

export const tagSlice = createSlice({
  name: "tag",
  initialState,
  reducers: {
    addTagNameToStore: (state: TagState, action: PayloadAction<TagType>) => {
      const index = state.value.tags.findIndex(
        (tag) => tag.id === action.payload.id
      );
      if (index !== -1) {
        state.value.tags.splice(index, 1);
      } else {
        state.value.tags.push(action.payload);
      }
    },
    addMenuToStore: (state: TagState, action: PayloadAction<string>) => {
      state.value.activeMenu = action.payload;
    },
  },
});

export const { addTagNameToStore, addMenuToStore } = tagSlice.actions;
export default tagSlice.reducer;
