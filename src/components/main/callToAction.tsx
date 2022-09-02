import { Box, Grid, Link, Text } from "@chakra-ui/react";
import { DiscordIcon, GithubIcon, KofiIcon } from "@components/icons";

interface CTAProps {
    name: string;
    cta: string;
    icon: React.FC;
    link: string;
}

const CallToActionBar: React.FC<CTAProps> = (props) => {
    return (
        <Box
            position={["relative"]}
            minWidth={["200", "500"]}
            maxWidth={["512"]}
            m={["auto"]}
            border="2px"
        >
            {/* TODO How to animate? */}
            <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-green-600 to-amber-500 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <Link
                target="_blank"
                rel="noreferrer"
                href={props.link}
                animation="ease-in"
            >
                <Box
                    position={["relative"]}
                    flex={["row"]}
                    alignItems={["center"]}
                    rounded={["lg"]}
                    background={["white"]}
                    px="7"
                    py="4"
                >
                    <props.icon />
                    <Text as="span" pr="6" textColor={["gray"]} mx="2">
                        {props.cta}
                    </Text>
                    |{" "}
                    <Box
                        as="span"
                        pl="6"
                        textColor={["amber"]}
                        transitionDuration={["200"]}
                        _groupHover={{ color: "gray" }}
                        alignSelf={["right"]}
                    >
                        {props.name} →
                    </Box>
                </Box>
            </Link>
        </Box>
    );
};

// TODO Style properly
export const CallToActions: React.FC = () => {
    const actions: Array<CTAProps> = [
        {
            name: "Kofi",
            cta: "Sumbangkan secangkir kopi",
            link: "https://ko-fi.com/thaza_kun",
            icon: KofiIcon,
        },
    ];

    return (
        <div className="grid grid-cols-1 grid-rows-3 gap-8 py-12">
            <Grid my="2" gap="8" alignItems={["start"]} p="5">
                {actions.map((call) => {
                    return <CallToActionBar {...call} />;
                })}
            </Grid>
        </div>
    );
};
