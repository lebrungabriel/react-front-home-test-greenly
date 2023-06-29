import { TagType } from "../types/TagType";

export const summer: TagType = {
  id: "summer",
  name: {
    fr: "été",
    en: "summer",
  },
  type: "season",
  color: "yellow",
};

export const meat: TagType = {
  id: "meat",
  name: {
    fr: "viande",
    en: "meat",
  },
  type: "plateType",
  color: "yellow",
};

export const chocolateTag: TagType = {
  id: "chocolate",
  name: {
    fr: "chocolat",
    en: "chocolate",
  },
  type: "delicacy",
  color: "yellow",
};

export const vegan: TagType = {
  id: "vegan",
  name: {
    fr: "vegan",
    en: "vegan",
  },
  type: "diet",
  color: "green",
};

export const fruits: TagType = {
  id: "fruits",
  name: {
    fr: "fruits",
    en: "fruits",
  },
  type: "healthy",
  color: "purple",
};

export const fish: TagType = {
  id: "fish",
  name: {
    fr: "poisson",
    en: "fish",
  },
  type: "plateType",
  color: "#e320bd",
};

export const vegetarian: TagType = {
  id: "vegetarian",
  name: {
    fr: "végétarien",
    en: "vegetarian",
  },
  type: "diet",
  color: "orange",
};

export const winter: TagType = {
  id: "winter",
  name: {
    fr: "hiver",
    en: "winter",
  },
  type: "season",
  color: "blue",
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
