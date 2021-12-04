import { FaEdit } from "react-icons/fa";

interface WhatIamDoingProps {
  icon: any;
  title: string;
  description: string;
}

interface OurTrustedClientsProps {
  image: any;
  name: string;
}

const rootImagesAbout = "/images/about/";

export const AboutMe = {
  images: [
    `${rootImagesAbout}about_img.jpg`,
    `${rootImagesAbout}about_img5.jpg`,
    `${rootImagesAbout}about_img3.jpg`,
    `${rootImagesAbout}about_img4.jpg`,
  ],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in eos saepe ipsa cupiditate accusantium voluptatibus quidem nam, reprehenderit, et necessitatibus adipisci.",
  supports: ["Web Design Full stack", "24/7 Support", "Unlimited Revisions"],
};

export const WhatIamDoing: WhatIamDoingProps[] = [
  {
    icon: FaEdit,
    title: "Web Design Full stack",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore dolorum atque dicta distinctio mollitia fuga.  dolor sit amet, consectetur adipisicing elit. Eum in",
  },
  {
    icon: FaEdit,
    title: "Web Design",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore dolorum atque dicta distinctio mollitia fuga.",
  },
  {
    icon: FaEdit,
    title: "App Developer",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore dolorum atque dicta distinctio mollitia fuga.",
  },
  {
    icon: FaEdit,
    title: "Mobile App",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore dolorum atque dicta distinctio mollitia fuga.",
  },
];

interface OurTrustedClientsProps {
  image: any;
  name: string;
}

export const OurTrustedClients: OurTrustedClientsProps[] = [
  {
    image: "/images/about/clients/client.png",
    name: "Marth Smiths",
  },
  {
    image: "/images/about/clients/client.png",
    name: "Marth Smiths",
  },
  {
    image: "/images/about/clients/client.png",
    name: "Marth Smiths",
  },
  {
    image: "/images/about/clients/client.png",
    name: "Marth Smiths",
  },
];
