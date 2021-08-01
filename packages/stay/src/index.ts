import {
  registerDeleteStay,
  registerGetStay,
  registerPostStay,
} from "./events";

export const handler = async (event: any, _context: any, callback: any) => {
  await registerGetStay({ event, callback });
  await registerPostStay({ event, callback });
  await registerDeleteStay({ event, callback });
};
