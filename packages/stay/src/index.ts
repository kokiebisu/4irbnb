import { StayController } from "./controllers";

export const handler = async (event: any, _context: any, callback: any) => {
  if (event.name === "GetStay") {
    const result = await new StayController().get();
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(result),
    });
  }
};
