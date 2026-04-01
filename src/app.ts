import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/documentation/swagger.js";

// middleware
import express from "express";
import cors from "cors";
import { logRequest } from "./middleware/logs/log-request.js";
import { logDuration } from "./middleware/logs/log-duration.js";
import { routeNotFound } from "./middleware/error/not-found.js";
import { onError } from "./middleware/error/on-error.js";

// routes
import authRouter from "./routes/auth/auth.js";
import usersRouter from "./routes/users/users.js";
import articlesRouter from "./routes/articles/articles.js";

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// initial middleware
app.use(cors());
app.use(express.json());
app.use(logRequest);
app.use(logDuration);

// updated routes
app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/articles", articlesRouter);

// catch middleware
app.use(routeNotFound);
app.use(onError);

export default app;
