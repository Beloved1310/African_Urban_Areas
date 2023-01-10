"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParticularUrbanArea = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const UrbanAfricaList_1 = require("../utilis/UrbanAfricaList");
const getParticularUrbanArea = async (req, res) => {
    let { name } = req.params;
    name = name.trim().toLowerCase().replace(/\s+/g, "-");
    if (!UrbanAfricaList_1.urbanAfricaList.includes(name)) {
        return res.status(404).send({
            message: `Not Found, Check the list of urban Areas for Input Suggestions`,
            data: {},
        });
    }
    const { data: { salaries }, } = await axios_1.default.get(`https://api.teleport.org/api/urban_areas/slug:${name}/salaries/`);
    const { data: { teleport_city_score: teleportCityScore }, } = await axios_1.default.get(`https://api.teleport.org/api/urban_areas/slug:${name}/scores/`);
    const { data: { photos: [image], }, } = await axios_1.default.get(`https://api.teleport.org/api/urban_areas/slug:${name}/images/`);
    const averageSalary = salaries.reduce((cumm, e) => cumm + e.salary_percentiles["percentile_50"], 0) / salaries.length;
    const data = {
        teleportCityScore,
        averageSalary,
        pictureofTheArea: image["image"],
    };
    return res
        .status(200)
        .send({ message: `Information of living in ${name}`, data });
};
exports.getParticularUrbanArea = getParticularUrbanArea;
//# sourceMappingURL=getParticularArea.js.map