import winston, { Logger } from "winston";

export const logger = (): Logger => {
  const winstonLogger: Logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: { service: "African Urban Areas" },
    transports: [],
  });
  return winstonLogger;
};
