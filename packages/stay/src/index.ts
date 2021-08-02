import {
  registerDeleteStay,
  registerGetStay,
  registerPostStay,
} from "./events";

export const handler = async (event: any, _context: any, callback: any) => {
  console.log("STAY EVENT", event);
  await registerGetStay({ event, callback });
  await registerPostStay({ event, callback });
  await registerDeleteStay({ event, callback });
};
