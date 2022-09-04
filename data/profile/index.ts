import { readTomlFile } from "lib/utils/toml";

const path = require("path");

export interface ProjectNoteProps {
    description: string;
    role: string;
    highlights: string[];
}

export interface ProjectProps {
    name: string;
    type: string | string[];
    url?: string;
    date: {
        start: Date;
        end?: Date;
    };
    notes: {
        en: ProjectNoteProps;
        ms: ProjectNoteProps;
    };
}

export interface ProjectDataProps {
    projects: ProjectProps[];
}

const root = process.cwd();

export const getData = (type: string) => {
    const file: string = path.join(root, "data", "profile", `${type}.toml`);
    return readTomlFile(file);
};
