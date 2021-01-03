import axios from "axios";
import { config } from "@config";

export const APIClient = ({ req }) => {
  if (typeof window === "undefined") {
    return axios.create({
      baseURL: config.SERVER_BASEURL,
      headers: {
        ...req.headers,
        Host: config.HOST,
      },
    });
  } else {
    // on the browser
    return axios.create({
      baseURL: config.CLIENT_BASEURL,
    });
  }
};
