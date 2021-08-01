import { registerVerify } from "./events";

export const handler = async (event: any, _context: any) => {
  await registerVerify({ event });
};
