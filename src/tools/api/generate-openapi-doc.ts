import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { registerHelloWorldEndpoint } from './endpoint-contracts/registerHelloWorldEndpoint';

const main = () => {
  const registry = new OpenAPIRegistry();
  registry.registerComponent("securitySchemes", "bearerAuth", {
    type: "http",
    scheme: "bearer",
  });

  registerHelloWorldEndpoint(registry);

  const generator = new OpenApiGeneratorV3(registry.definitions);
  const generatedDocument = generator.generateDocument(getOpenApiConfig());

  fs.writeFileSync(path.join(__dirname, '../api/openapi.json'), JSON.stringify(generatedDocument, null, 2));
};

const getOpenApiConfig = (): OpenAPIObjectConfig => {
  return {
    openapi: "3.0.3",
    info: {
      version: "1.0",
      title: "simple-project",
      description: "simpe-project",
    },
    security: [{ bearerAuth: [] }],
    servers: [
      { url: "http://localhost:3000", description: "LOCAL" },
    ],
  };
};

main();
