import axios from "axios";

export const APIClient = ({ req }) => {
  if (typeof window === "undefined") {
    return axios.create({
      baseURL:
        "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
      // baseURL: "https://www.nextbnb.dev",
      headers: {
        ...req.headers,
        Host: "www.nextbnb.dev",
      },
    });
  } else {
    // on the browser
    return axios.create({
      baseURL: "/",
    });
  }
};
