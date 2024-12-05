import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { registerHelloWorldEndpoint, registerHelloUserEndpoint } from "./endpoint-contracts";

const registry = new OpenAPIRegistry();

registerHelloWorldEndpoint(registry);
registerHelloUserEndpoint(registry);

console.log(registry.getOpenAPIDocument());
