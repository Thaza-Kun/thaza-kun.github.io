import React from "react";
import {
    Button,
    Box,
    Center,
    Heading,
    Icon,
    Image,
    Link,
    Stack,
    Text,
    ButtonGroup,
    Grid,
} from "@chakra-ui/react";
import { HeroCard } from "./hero";
import { CallToActions } from "./callToAction";

// TODO Style Properly
export const Main: React.FC = () => {
    return (
        <Stack
            direction={["column", "row"]}
            minW="screen"
            alignItems={["center"]}
            justifyContent="space-between"
            py="8"
            as="section"
        >
            <HeroCard />
            <CallToActions />
        </Stack>
    );
};
