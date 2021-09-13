import * as Mock from "./mock";
import * as Production from "./relational";

export const createRepo = () => {
  if (process.env.NODE_ENV === "dev") {
    Mock.Repository.initialize();
  } else {
    Production.Repository.initialize();
  }
};

export * as Types from "./types";
