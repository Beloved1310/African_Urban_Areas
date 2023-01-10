"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const async_1 = require("../middleware/async");
const listUrbanAfricanAreas_1 = require("../controller/listUrbanAfricanAreas");
const getParticularArea_1 = require("../controller/getParticularArea");
const router = express_1.default.Router();
router.get('/areas', (0, async_1.asyncErrorhandling)(listUrbanAfricanAreas_1.listUrbanAfrican));
router.get('/particular/:name', (0, async_1.asyncErrorhandling)(getParticularArea_1.getParticularUrbanArea));
exports.default = router;
//# sourceMappingURL=urbanAfrica.js.map