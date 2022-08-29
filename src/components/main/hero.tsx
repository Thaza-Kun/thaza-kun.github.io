import {
    Box,
    Button,
    Center,
    Heading,
    Link,
    Stack,
    Image,
    Text,
} from "@chakra-ui/react";
import { TwitterIcon } from "@components/icons";

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
    ];
    return (
        <Box
            mb={["10", "10", "10", 0]}
            flex="column"
            h="full"
            alignItems={["start"]}
            justifyContent="center"
            pr="8"
        >
            <Center>
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
                />
            </Center>
            <Box ml="6" alignContent={["center", "left"]}>
                <Heading
                    as="h2"
                    fontSize={["4xl", "5xl", "5xl", "6xl"]}
                    fontWeight="extrabold"
                    textAlign={["center"]}
                >
                    {pen_name}
                </Heading>
                <Center mt="1">({full_name})</Center>
                <Text
                    mt="2"
                    fontSize={["lg"]}
                    w="full"
                    textAlign={["center", "left"]}
                >
                    {blurb}
                </Text>
                <Stack alignItems="center">
                    {socials.map((social) => {
                        return (
                            <Button>
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
            </Box>
        </Box>
    );
};
