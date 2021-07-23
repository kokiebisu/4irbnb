import { buildCreateExperience } from "./factory";

export * from "./type";
export * from "./validate";
export * from "./class";

const imgUrlValidator = /(https?:\/\/.*\.(?:png|jpg))/i;

export const createExperience = buildCreateExperience(imgUrlValidator);
