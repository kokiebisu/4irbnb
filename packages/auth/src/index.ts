import { registerAllow } from "./events";

export const handler = async (event: any, _context: any, callback: any) => {
  await registerAllow({ event, callback });
};
