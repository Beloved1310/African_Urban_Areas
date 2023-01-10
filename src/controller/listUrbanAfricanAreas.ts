import { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";

export const listUrbanAfrican = async (
  req: Request,
  res: Response
): Promise<{}> => {
  let { data }: AxiosResponse = await axios.get(
    `https://api.teleport.org/api/continents/geonames:AF/urban_areas/`
  );
  const UrbanAreasList = data["_links"]["ua:items"];
  const UrbanAreas = UrbanAreasList.map((area: any) => area.name);
  return res.status(200).send({ message: `African Urban Areas`, data: UrbanAreas });
};
