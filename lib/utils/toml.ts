import TOML from "@ltd/j-toml";
import fs from "fs";

export const readTomlFile: CallableFunction = (file: string) => {
    const data: Buffer = fs.readFileSync(file);
    // It is necessary to stringify and parse JSON because
    // Even though TOML.parse(data) returns a valid Object,
    // It returns a null prototype and Next.JS's getStaticProps
    // checkes that an object has a valid protoype.
    return JSON.parse(JSON.stringify({ ...TOML.parse(data) }));
};
