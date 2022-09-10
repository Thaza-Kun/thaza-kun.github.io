import { ProjectCardProps } from "@components/cards/projects";
import readTomlFile from "lib/utils/toml";
import path from "path";

export interface ProjectNoteProps {
    description: string;
    blurb: string;
    role: string;
    highlights: string[];
}

interface ProjectProps {
    name: string;
    type: string | string[];
    image?: string;
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

export interface ProjectArrayProps {
    projects: ProjectProps[];
}

const root = process.cwd();

export default function getData(type: string) {
    const file: string = path.join(root, "data", "profile", `${type}.toml`);
    return readTomlFile(file);
}
