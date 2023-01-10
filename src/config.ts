import path from "path";
import { config as dotenv } from "dotenv";

const { env } = process;

dotenv({
  path: path.resolve(__dirname, "../.env"),
});

export interface IConfig {
  PORT: number;
}
export const config: IConfig = {
  PORT: parseInt(env.PORT!, 10) || 7000,
};
