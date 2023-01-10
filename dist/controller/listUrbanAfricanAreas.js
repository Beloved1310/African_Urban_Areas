"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUrbanAfrican = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const listUrbanAfrican = async (req, res) => {
    let { data } = await axios_1.default.get(`https://api.teleport.org/api/continents/geonames:AF/urban_areas/`);
    const UrbanAreasList = data["_links"]["ua:items"];
    const UrbanAreas = UrbanAreasList.map((area) => area.name);
    return res.status(200).send({ message: `African Urban Areas`, data: UrbanAreas });
};
exports.listUrbanAfrican = listUrbanAfrican;
//# sourceMappingURL=listUrbanAfricanAreas.js.map