import * as Mock from "./mock";
import * as Production from "./relational";

export const createRepo = () => {
  if (process.env.NODE_ENV === "dev") {
    Mock.Repository.ini;
  } else {
    Production.Repository.initialize();
  }
};
