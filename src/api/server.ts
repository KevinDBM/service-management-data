import express, { Express, Request, Response } from "express";
import { corsApi } from "./loaders/cors";
import { errorHandler } from "./loaders/error-handler";
import routes from "./routes";
import { CustomError } from "./exeptions/custom-error";

const app: Express = express();
corsApi(app);

app.use(express.json());
routes(app);

app.use((req: Request, res: Response, next) => {
  throw new CustomError(404, "Route not found");
});

app.use(errorHandler);

export default app;
