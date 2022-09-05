import { Box } from "@chakra-ui/react";
import { Footer } from "@components/footer";
import { Header } from "@components/header";

export const MAIN_CONTAINER_MAX_WIDTH: number = 1024;

export const DefaultLayout: React.FC<React.ReactNode> = ({ children }) => {
    return (
        <Box>
            <Header />
            <Box maxWidth={[MAIN_CONTAINER_MAX_WIDTH]} marginX="auto">
                {children}
            </Box>
            <Footer />
        </Box>
    );
};
