import express, { Application, Request, Response } from "express";
import urbanAfrica from "./routes/urbanAfrica";

import cors from "cors";

const app: Application = express();

app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  return res.send("API OK");
});

app.use("/african-urbans", urbanAfrica);

export default app;
