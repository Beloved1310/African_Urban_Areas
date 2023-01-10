"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const tslib_1 = require("tslib");
const winston_1 = tslib_1.__importDefault(require("winston"));
const logger = () => {
    const winstonLogger = winston_1.default.createLogger({
        level: "info",
        format: winston_1.default.format.json(),
        defaultMeta: { service: "African Urban Areas" },
        transports: [],
    });
    return winstonLogger;
};
exports.logger = logger;
//# sourceMappingURL=winston.js.map