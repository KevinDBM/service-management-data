import cors from "cors";
import { Express } from "express";

export const corsApi = (app: Express) => {
  app.use(
    cors({
      origin: true,
      credentials: true,
      methods: "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      allowedHeaders:
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method",
    })
  );
};
