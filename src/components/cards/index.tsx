import React from "react";
import { SimpleGrid, Box, Heading, Text, Tag } from "@chakra-ui/react";
import { ProjectNoteProps, ProjectProps } from "data/profile";
import { MAIN_CONTAINER_MAX_WIDTH } from "src/layouts/default";

interface CardData {
    data: ProjectProps[];
}

type Locale = "en" | "ms";

let locale: Locale = "ms";

export const CardItem: React.FC<ProjectProps> = (props) => {
    const notes: ProjectNoteProps =
        locale == "en" ? props.notes.en : props.notes.ms;

    const responsiveCardWidth: CallableFunction = (columns: number) => {
        const modifier = columns >= 3 ? 15 : 0;
        return MAIN_CONTAINER_MAX_WIDTH / columns - modifier;
    };
    return (
        <Box
            key={props.name}
            width={[1, 2, 3, 3].map((n) => {
                return responsiveCardWidth(n);
            })}
            height={["170px"]}
            background={["aliceblue"]}
            borderRadius={["3xl"]}
            padding={4}
        >
            <Heading fontSize={16} fontWeight="700" m={1} mb={1.5}>
                {props.name}
            </Heading>
            <Tag>
                {props.type}
                {/* {props.date.start}
                {props.date.end && ` ⟶  ${props.date.end}`} */}
            </Tag>
            <Box marginLeft={1} marginTop={3}>
                <Text fontSize={14}>{notes.description}</Text>
                {/* <Text fontSize={14} justifyContent={["end"]}>
                    {notes.role}
                </Text> */}
                {/* {notes.highlights.map((highlight) => {
                    return <Text fontSize={12}>{highlight}</Text>;
                })} */}
            </Box>
        </Box>
    );
};

export const Cards: React.FC<CardData> = (props) => {
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
                <CardItem {...item} />
            ))}
        </SimpleGrid>
    );
};
