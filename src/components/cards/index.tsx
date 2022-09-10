import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import ProjectCard, { ProjectCardProps } from "./projects";

export interface BaseCardProps {
    name: string;
    image?: string;
}

interface CardData {
    data: ProjectCardProps[];
    component: React.FC<any>;
}

export const CardGrid: React.FC<CardData> = (props) => {
    // TODO Map props to components automatically
    if (!props.component) {
        console.error(
            `\n#####\n[component/cards] The Component 'Cards' expects component its props but None were given.\n#####\n`,
        );
    }
    const ColumnLength: number = props.data.length >= 3 ? 3 : props.data.length;
    return (
        <SimpleGrid
            marginTop={10}
            columns={[1, null, 2, ColumnLength]}
            spacingX={10}
            spacingY={5}
            paddingX={5}
            marginX="auto"
        >
            {props.data.map((item) => (
                <props.component {...item} />
            ))}
        </SimpleGrid>
    );
};
