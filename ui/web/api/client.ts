import axios from "axios";
import { config } from "../config";

export const APIClient = (context?: any) => {
  if (typeof window === "undefined") {
    return axios.create({
      baseURL: config.SERVER_BASEURL,
      headers: {
        ...context.req.headers,
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
