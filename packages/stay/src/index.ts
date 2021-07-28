import { StayController } from "./controllers";

export const handler = async (event: any, context: any, callback: any) => {
  const events: { readonly GetStay: () => Promise<void> } = {
    GetStay: async () =>
      await new StayController().get({ event, context, callback }),
  };
  events[event.name];
};
