import winston from "winston";
import { logger } from "./utilis/winston";
import { config } from "./config";

import app from "./app";
const log = logger();

log.add(
  new winston.transports.Console({
    format: winston.format.simple(),
  })
);

process.on("unhandledRejection", (err: any) => {
  log.error(err, "Unhandled Rejection at Promise");
  process.exit(1);
});
process.on("uncaughtException", (err: any) => {
  log.error(err, "Uncaught Exception thrown");
  process.exit(1);
});

app.listen(config.PORT, () => {
  log.info(`Web server is running ${config.PORT}`);
});
