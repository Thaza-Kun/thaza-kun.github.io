import React from "react";
import {
    Box,
    Heading,
    LinkBox,
    LinkOverlay,
    Link,
    Stack,
    Text,
    Image,
    AspectRatio,
    useColorModeValue,
} from "@chakra-ui/react";
import { type ProjectNoteProps } from "data/profile";
import { MAIN_CONTAINER_MAX_WIDTH } from "src/layouts/default";
import { GithubIcon } from "@components/icons";
import { LinkIcon } from "@chakra-ui/icons";
import { BaseCardProps } from ".";

export interface ProjectCardProps extends BaseCardProps {
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

type Locale = "en" | "ms";

let locale: Locale = "ms";

export default function ProjectCard(
    props: ProjectCardProps,
): React.ReactElement {
    const notes: ProjectNoteProps =
        locale == "en" ? props.notes.en : props.notes.ms;

    const responsiveCardWidth: CallableFunction = (columns: number) => {
        if (columns == 1) {
            return "full";
        }
        const modifier = columns >= 3 ? 15 : 10;
        return MAIN_CONTAINER_MAX_WIDTH / columns - modifier;
    };

    const parseLink: React.FC<string> = (link: string) => {
        let child: React.ReactElement = <LinkIcon />;
        if (link.includes("://github.com")) {
            child = <GithubIcon />;
        }
        return (
            <LinkOverlay as={Link} href={link}>
                {child}
            </LinkOverlay>
        );
    };

    // Sets default image
    const image: string = props.image
        ? props.image
        : "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80";

    return (
        <LinkBox
            as="article"
            key={props.name}
            width={[1, 1, 3, 3].map((n) => {
                return responsiveCardWidth(n);
            })}
            // height={["170px"]}
            bg={useColorModeValue("aliceblue", "gray.700")}
            borderRadius={["3xl"]}
            _hover={{ transform: "scale(1.025, 1.025)" }}
            transitionDuration="slow"
            transitionProperty="transform"
            transitionTimingFunction="ease-out"
        >
            <AspectRatio flexShrink={0} ratio={12 / 4}>
                <Image
                    borderTopRadius={["3xl"]}
                    src={image}
                    alt={props.name}
                    objectFit="cover"
                />
            </AspectRatio>
            <Box padding={{ base: 3, sm: 5 }}>
                <Stack
                    alignItems={{ base: "flex-start", md: "center" }}
                    justifyContent={{ base: "space-between" }}
                    direction={{ md: "row" }}
                    w="full"
                >
                    <Heading
                        fontSize={{ base: "lg", sm: "xl" }}
                        as="h3"
                        fontWeight="bold"
                        lineHeight="1.2"
                        mb={2}
                    >
                        {props.name}
                    </Heading>
                    {props.url && parseLink(props.url)}
                </Stack>
                <Text fontSize="sm" marginY={3}>
                    {notes.blurb
                        ? notes.blurb.trim().length != 0 // Check that it's not all whitespace
                            ? notes.blurb
                            : notes.description
                        : notes.description}
                </Text>
            </Box>
        </LinkBox>
    );
}
