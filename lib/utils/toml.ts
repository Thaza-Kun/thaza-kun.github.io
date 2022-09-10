import TOML from "@ltd/j-toml";
import { type ProjectArrayProps } from "data/profile";
import fs from "fs";

export default function readTomlFile(file: string): ProjectArrayProps {
    const data: Buffer = fs.readFileSync(file);
    // It is necessary to stringify and parse JSON because
    // Even though TOML.parse(data) returns a valid Object,
    // It returns a null prototype and Next.JS's getStaticProps
    // checkes that an object has a valid protoype.
    return JSON.parse(
        JSON.stringify({ ...TOML.parse(data, { joiner: "\n" }) }),
    );
}
