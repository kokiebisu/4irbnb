import { registerAuthorize } from "./events";

export const handler = async (event: any, _context: any) => {
  await registerAuthorize({ event });
};
