import { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";
import { urbanAfricaList } from "../utilis/UrbanAfricaList";

export const getParticularUrbanArea = async (
  req: Request,
  res: Response
): Promise<{}> => {
  let { name } = req.params;
  name = name.trim().toLowerCase().replace(/\s+/g, "-");

  if (!urbanAfricaList.includes(name)) {
    return res.status(404).send({
      message: `Not Found, Check the list of urban Areas for Input Suggestions`,
      data: {},
    });
  }
  const {
    data: { salaries },
  }: AxiosResponse = await axios.get(
    `https://api.teleport.org/api/urban_areas/slug:${name}/salaries/`
  );
  const {
    data: { teleport_city_score: teleportCityScore },
  }: AxiosResponse = await axios.get(
    `https://api.teleport.org/api/urban_areas/slug:${name}/scores/`
  );
  const {
    data: {
      photos: [image],
    },
  } = await axios.get(
    `https://api.teleport.org/api/urban_areas/slug:${name}/images/`
  );

  const averageSalary =
    salaries.reduce(
      (cumm: number, e: any) => cumm + e.salary_percentiles["percentile_50"],
    0
    ) / salaries.length;


  const data = {
    teleportCityScore,
    averageSalary,
    pictureofTheArea: image["image"],
  };
  return res
    .status(200)
    .send({ message: `Information of living in ${name}`, data });
};
