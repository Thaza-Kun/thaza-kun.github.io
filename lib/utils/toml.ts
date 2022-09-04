import TOML from "@ltd/j-toml";
import fs from "fs";

export const readTomlFile: CallableFunction = (file: string) => {
    const data: Buffer = fs.readFileSync(file);
    return JSON.parse(JSON.stringify({ ...TOML.parse(data) }));
};
