import swaggerJsdoc from "swagger-jsdoc";

const PORT = process.env.PORT || 3000;

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "News-Bureau-API",
      version: "1.0.0",
      description: "REST API for managing users and articles",
    },
    servers: [{ url: `http://localhost:${PORT}` }],
  },
  apis: ["./src/routes/**/*.ts"],
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);
