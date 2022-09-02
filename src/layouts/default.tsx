import { Box } from "@chakra-ui/react";
import { Footer } from "@components/footer";
import { Header } from "@components/header";

export const DefaultLayout: React.FC<React.ReactNode> = ({ children }) => {
    return (
        <Box>
            <Header />
            <Box maxWidth={["1024"]} marginX="auto">
                {children}
            </Box>
            <Footer />
        </Box>
    );
};
