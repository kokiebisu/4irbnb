import { createStayController } from "./controllers";

export const handler = async (event: any) => {
  const controller = createStayController();
  try {
    switch (event.requestContext.resourceId) {
      case "GET /stay/{id}":
        return await controller.get({
          identifier: {
            id: event.pathParameters.id,
          },
        });
      case "DELETE /stay/{id}":
        return await controller.delete({
          identifier: {
            id: event.payload.identifier,
          },
        });
      case "PUT /stays":
        const data = JSON.parse(event.body);
        return await controller.post({ data });
      default:
        throw new Error(
          `Unsupported route: "${event.requestContext.resourceId}"`
        );
    }
  } catch (error: any) {
    return {
      statusCode: 400,
      "Content-Type": "application/json",
      body: error.message as string,
    };
  }
};
