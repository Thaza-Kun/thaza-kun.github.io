import { Box } from "@chakra-ui/react";
import { Footer } from "@components/footer";
import { Header } from "@components/header";
import React from "react";

export const MAIN_CONTAINER_MAX_WIDTH: number = 1024;

interface LayoutProps {
    children: React.ReactNode;
}

export default function DefaultLayout({
    children,
}: LayoutProps): React.ReactElement {
    return (
        <Box>
            <Header />
            <Box maxWidth={[MAIN_CONTAINER_MAX_WIDTH]} marginX="auto">
                {children}
            </Box>
            <Footer />
        </Box>
    );
}
