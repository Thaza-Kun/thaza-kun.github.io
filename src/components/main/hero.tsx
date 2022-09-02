import {
    Button,
    Center,
    Heading,
    Link,
    Stack,
    Image,
    Text,
    Grid,
    GridItem,
} from "@chakra-ui/react";
import { DiscordIcon, GithubIcon, TwitterIcon } from "@components/icons";

interface SocialProps {
    name: string;
    icon: React.FC;
    link: string;
}

export const HeroCard: React.FC = () => {
    const pen_name: string = "Thaza_Kun";
    const full_name: string = "Murthadza Aznam";

    const blurb: string =
        "Graduan Fizik yang sedang meneroka dunia digital. Bagi yang meminati Sains, Matematik, Data, atau Pengaturcaraan; bolehlah ikuti kembara bersamaku.";

    const socials: Array<SocialProps> = [
        {
            name: "Twitter",
            icon: TwitterIcon,
            link: "https://twitter.com/Thaza_Kun",
        },
        {
            name: "Discord",
            icon: DiscordIcon,
            link: "https://discord.gg/9c6cWVwdEJ",
        },
        {
            name: "Github",
            link: "https://github.com/thaza-kun/",
            icon: GithubIcon,
        },
    ];
    return (
        <Grid
            templateAreas={[
                `"pic"
                "title"
                "blurb"
                "socials"`,
                null,
                `"pic title"
                "pic blurb"
                "socials socials"`,
            ]}
            gridTemplateRows={["16 16 10"]}
            gridTemplateColumns={["32 50"]}
            maxWidth={["700"]}
        >
            <GridItem area={["pic"]} margin={["auto"]}>
                <Image
                    src="/static/images/avatar.jpg"
                    borderRadius={["full", "lg"]}
                    boxSize={["70px", "90px", "90px", "100px"]}
                    shadow="md"
                    height={["32"]}
                    width={["32"]}
                    rounded={["lg"]}
                    border={["gray"]}
                    alt="avatar"
                    minWidth={["32"]}
                    minHeight={["32"]}
                />
            </GridItem>
            <GridItem area={["title"]}>
                <Heading
                    as="h2"
                    fontSize={["4xl", "5xl"]}
                    fontWeight="extrabold"
                    textAlign={["center"]}
                >
                    {pen_name}
                </Heading>
                <Center mt="1">({full_name})</Center>
            </GridItem>
            <GridItem
                area={["blurb"]}
                marginX={["2", null, "10"]}
                maxWidth={["430"]}
            >
                <Text
                    mt="2"
                    fontSize={["lg"]}
                    w="full"
                    textAlign={["center", "left"]}
                >
                    {blurb}
                </Text>
            </GridItem>
            <GridItem area={["socials"]} marginX={["3", "10"]}>
                <Stack
                    alignItems="center"
                    justifyContent={["space-around"]}
                    direction={["column", "row"]}
                    marginX="auto"
                >
                    {socials.map((social) => {
                        return (
                            <Button width={["full"]}>
                                <Link
                                    my="3"
                                    py="auto"
                                    fontSize={["sm"]}
                                    fontWeight="bold"
                                    href={social.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {<social.icon />} {social.name}
                                </Link>
                            </Button>
                        );
                    })}
                </Stack>
            </GridItem>
        </Grid>
    );
};
