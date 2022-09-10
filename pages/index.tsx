import React from "react";
import { Flex, Heading, Button, useColorMode } from "@chakra-ui/react";

import { Main, CardGrid } from "@components";
import DefaultLayout from "src/layouts";

import getData from "data/profile";
import { type GetStaticProps } from "next";
import ProjectCard, { type ProjectCardProps } from "@components/cards/projects";

interface HomeProps {
    projects: ProjectCardProps[];
}

const Home: React.FC<HomeProps> = (props) => {
    // Show only current projects
    const projects: ProjectCardProps[] = props.projects.filter((project) => {
        return !!!project.date.end;
    });
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <DefaultLayout>
            <Flex
                direction="column"
                minH="100vh"
                paddingTop={4}
                paddingBottom={8}
            >
                {/* Toggle light/dark mode */}
                <Button onClick={toggleColorMode}>Toggle Color</Button>
                <Main />
                <Heading as="h3" marginX="auto" paddingTop={15}>
                    - Sedang Diusahakan -
                </Heading>
                <CardGrid data={projects} component={ProjectCard} />
                {/* TODO Iklan:
                - buku
                - Samudra
                - Kofi
                */}
            </Flex>
        </DefaultLayout>
    );
};

export const getStaticProps: GetStaticProps = () => {
    const projects: ProjectCardProps[] = getData("projects").projects;
    return { props: { projects } };
};

export default Home;
