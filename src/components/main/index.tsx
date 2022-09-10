import React from "react";
import { Stack } from "@chakra-ui/react";
import { HeroCard } from "./hero";

export const Main: React.FC = () => {
    return (
        <Stack
            direction={["column", "row"]}
            minW="screen"
            maxWidth={["1000"]}
            marginX="auto"
            alignItems={["center"]}
            justifyContent="space-between"
            py="8"
            as="section"
        >
            <HeroCard />
        </Stack>
    );
};
