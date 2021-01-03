export const config = {
  HOST:
    process.env.NODE_ENV === "production" ? "www.nextbnb.dev" : "nextbnb.ca",
  SERVER_BASEURL:
    "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
  CLIENT_BASEURL: "/",
};
