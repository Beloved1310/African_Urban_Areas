"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const urbanAfrica_1 = tslib_1.__importDefault(require("./routes/urbanAfrica"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: "*" }));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    return res.send("API OK");
});
app.use("/african-urbans", urbanAfrica_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map