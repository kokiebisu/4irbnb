import { OktaAuth } from "@okta/okta-auth-js";

export const authClient = new OktaAuth({
  // Required config
  issuer: `https://${process.env.NEXT_PUBLIC_OKTA_DOMAIN}/oauth2/default`,

  // Required for login flow using getWithRedirect()
  clientId: process.env.NEXT_PUBLIC_OKTA_CLIENT_ID,
  redirectUri: "https://acme.com/oauth2/callback/home",

  // Parse authorization code from hash fragment instead of search query
  responseMode: "fragment",

  // Configure TokenManager to use sessionStorage instead of localStorage
  tokenManager: {
    storage: "sessionStorage",
  },
});
