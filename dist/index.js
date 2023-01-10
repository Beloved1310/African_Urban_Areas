"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const winston_1 = tslib_1.__importDefault(require("winston"));
const winston_2 = require("./utilis/winston");
const config_1 = require("./config");
const app_1 = tslib_1.__importDefault(require("./app"));
const log = (0, winston_2.logger)();
log.add(new winston_1.default.transports.Console({
    format: winston_1.default.format.simple(),
}));
process.on("unhandledRejection", (err) => {
    log.error(err, "Unhandled Rejection at Promise");
    process.exit(1);
});
process.on("uncaughtException", (err) => {
    log.error(err, "Uncaught Exception thrown");
    process.exit(1);
});
app_1.default.listen(config_1.config.PORT, () => {
    log.info(`Web server is running ${config_1.config.PORT}`);
});
//# sourceMappingURL=index.js.map