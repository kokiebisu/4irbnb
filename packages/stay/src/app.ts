import {
  registerDeleteStay,
  registerGetStay,
  registerPostStay,
} from "./events";

export const handler = async (event: any) => {
  console.log("STAY EVENT", event);
  await registerGetStay({ event });
  await registerPostStay({ event });
  await registerDeleteStay({ event });
};
