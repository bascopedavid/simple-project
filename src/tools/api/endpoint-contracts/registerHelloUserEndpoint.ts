import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { responsePayloadSchema } from "../../../handlers/api/helloUser";

export const registerHelloUserEndpoint = (registry: OpenAPIRegistry) => {
  registry.registerPath({
    method: "get",
    path: "/hello/user/{user_id}",
    tags: ["API"],
    operationId: "HelloUser",
    description: "Hello user",
    security: [],
    responses: {
      200: {
        description: "Hello user",
        content: {
          "application/json": {
            schema: responsePayloadSchema,
          },
        },
      },
    },
  });
};
