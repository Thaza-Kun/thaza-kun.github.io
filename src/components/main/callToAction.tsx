import { Box, Grid, Link, Text } from "@chakra-ui/react";
import { DiscordIcon, GithubIcon, KofiIcon } from "@components/icons";

interface CTAProps {
    name: string;
    cta: string;
    icon: React.FC;
    link: string;
}

// TODO Style properly
export const CallToActions: React.FC = () => {
    const actions: Array<CTAProps> = [
        {
            name: "Discord",
            cta: "Bincang bersama pembaca yang lain",
            icon: DiscordIcon,
            link: "https://discord.gg/9c6cWVwdEJ",
        },
        {
            name: "Github",
            cta: "Jenguk kod yang pernah kuhasilkan",
            link: "https://github.com/thaza-kun/",
            icon: GithubIcon,
        },
        {
            name: "Kofi",
            link: "https://ko-fi.com/thaza_kun",
            cta: "Sumbangkan secangkir kopi",
            icon: KofiIcon,
        },
    ];

    return (
        <div className="grid grid-cols-1 grid-rows-3 gap-8 py-12">
            <Grid my="2" gap="8" alignItems={["start"]} p="5">
                {actions.map((call) => {
                    return (
                        <Box
                            position={["relative"]}
                            minWidth="600px"
                            m={["auto"]}
                            border="2px"
                        >
                            {/* TODO How to animate? */}
                            <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-green-600 to-amber-500 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                            <Link
                                target="_blank"
                                rel="noreferrer"
                                href={call.link}
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
                                    <call.icon />
                                    <Text
                                        as="span"
                                        pr="6"
                                        textColor={["gray"]}
                                        mx="2"
                                    >
                                        {call.cta}
                                    </Text>
                                    |{" "}
                                    <Text
                                        as="span"
                                        pl="6"
                                        textColor={["amber"]}
                                        transitionDuration={["200"]}
                                        _groupHover={{ color: "gray" }}
                                    >
                                        {call.name} →
                                    </Text>
                                </Box>
                            </Link>
                        </Box>
                    );
                })}
            </Grid>
        </div>
    );
};
