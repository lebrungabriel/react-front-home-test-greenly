import { TagType } from "../types/TagType";

export const summer: TagType = {
  id: "summer",
  name: {
    fr: "été",
    en: "summer",
  },
  type: "season",
  color: "#FFD89C",
};

export const meat: TagType = {
  id: "meat",
  name: {
    fr: "viande",
    en: "meat",
  },
  type: "plateType",
  color: "#FFB4B4",
};

export const chocolateTag: TagType = {
  id: "chocolate",
  name: {
    fr: "chocolat",
    en: "chocolate",
  },
  type: "delicacy",
  color: "#867070",
};

export const vegan: TagType = {
  id: "vegan",
  name: {
    fr: "vegan",
    en: "vegan",
  },
  type: "diet",
  color: "#FEFAE0",
};

export const fruits: TagType = {
  id: "fruits",
  name: {
    fr: "fruits",
    en: "fruits",
  },
  type: "healthy",
  color: "#FDCEDF",
};

export const fish: TagType = {
  id: "fish",
  name: {
    fr: "poisson",
    en: "fish",
  },
  type: "plateType",
  color: "#E3F4F4",
};

export const vegetarian: TagType = {
  id: "vegetarian",
  name: {
    fr: "végétarien",
    en: "vegetarian",
  },
  type: "diet",
  color: "#BBD6B8",
};

export const winter: TagType = {
  id: "winter",
  name: {
    fr: "hiver",
    en: "winter",
  },
  type: "season",
  color: "yellow",
};

export const tagList: TagType[] = [
  summer,
  winter,
  chocolateTag,
  fruits,
  meat,
  fish,
  vegetarian,
  vegan,
];