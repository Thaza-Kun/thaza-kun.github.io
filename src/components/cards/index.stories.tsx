import ProjectCard, { ProjectCardProps } from "@components/cards/projects";
import { CardGrid, type CardData } from "./index";

export default {
    title: "Project Card",
    component: CardGrid,
};

const data: CardData = {
    data: [
        {
            name: "Anisa: Animasi Sains",
            url: "url1",
            date: {
                start: new Date("2022-02-30"),
                end: new Date("2022-03-30"),
            },
            notes: {
                en: {
                    description:
                        "Uses Manim to create animations to explain science and math concepts.",
                    role: "Sole animator",
                    highlights: [
                        "Animated Al-Khawarizmi's technique to solve quadratic equation geometrically.",
                    ],
                },
                ms: {
                    description:
                        "Menggunakan Manim untuk menghasilkan animasi menerangkan kaedah sains dan matematik.",
                    role: "Penganimasi tunggal",
                    highlights: [
                        "Menunjukkan kaedah yang digunakan oleh Al-Khawarizmi untuk menyelesaikan persamaan kuadratik secara geometri.",
                    ],
                },
            },
        },
        {
            name: "Anisa: Animasi Sains",
            url: "url1",
            date: {
                start: new Date("2022-02-30"),
                end: new Date("2022-03-30"),
            },
            notes: {
                en: {
                    description:
                        "Uses Manim to create animations to explain science and math concepts.",
                    role: "Sole animator",
                    highlights: [
                        "Animated Al-Khawarizmi's technique to solve quadratic equation geometrically.",
                    ],
                },
                ms: {
                    description:
                        "Menggunakan Manim untuk menghasilkan animasi menerangkan kaedah sains dan matematik.",
                    role: "Penganimasi tunggal",
                    highlights: [
                        "Menunjukkan kaedah yang digunakan oleh Al-Khawarizmi untuk menyelesaikan persamaan kuadratik secara geometri.",
                    ],
                },
            },
        },
    ],
    component: ProjectCard,
};

export const Basic = () => <CardGrid {...data} />;
