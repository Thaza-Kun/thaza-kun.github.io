import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";

import { Header, Main, Cards, Footer } from "@components";
import { DefaultLayout } from "src/layouts";

import { getData, ProjectDataProps, ProjectProps } from "data/profile";
import { GetStaticProps } from "next";

interface HomeProps {
    projects: ProjectProps[];
}

const Home: React.FC<HomeProps> = (props) => {
    // Show only current projects
    const projects: ProjectProps[] = props.projects.filter((project) => {
        return !!!project.date.end;
    });
    return (
        <DefaultLayout>
            <Flex direction="column" minH="100vh">
                <Main />
                <Heading as="h3">Karya Terkini</Heading>
                <Cards data={projects} />
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
    const projects: ProjectProps[] = getData("projects").projects;
    return { props: { projects } };
};

export default Home;
