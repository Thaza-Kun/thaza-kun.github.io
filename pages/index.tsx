import React from "react";
import { Flex } from "@chakra-ui/react";

import { Header, Main, Cards, Footer } from "@components";
import { DefaultLayout } from "src/layouts";

const Home: React.FC = () => {
    return (
        <DefaultLayout>
            <Flex direction="column" minH="100vh">
                <Main />
                <Cards />
            </Flex>
        </DefaultLayout>
    );
};

export default Home;
