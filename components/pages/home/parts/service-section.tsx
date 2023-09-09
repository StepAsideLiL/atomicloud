"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  BsBox,
  BsCardImage,
  BsCoin,
  BsGear,
  BsPlayBtn,
  BsShieldLock,
} from "react-icons/bs";

export const ServicesCard = ({
  list,
}: {
  list: {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
  };
}) => {
  const { id, title, description, icon } = list;

  return (
    <Card>
      <CardContent className="p-6 space-y-5">
        <div>{icon}</div>

        <h1 className="text-2xl font-semibold">{title}</h1>
      </CardContent>

      <CardFooter>
        <p>{description}</p>
      </CardFooter>
    </Card>
  );
};

export const serviceDetails = [
  {
    id: "1",
    title: "Atomic Auth",
    description:
      "Atomic Auth helps easy implementation of authentication with various providers and session management.",
    icon: <BsShieldLock className="inline-block text-4xl" />,
  },
  {
    id: "2",
    title: "Atomic AI Model",
    description:
      "AtomiCloud provides some unique sets of AI model for specific applications to help with some unique tasks.",
    icon: <BsBox className="inline-block text-4xl" />,
  },
  {
    id: "3",
    title: "Atomic Headless CMS",
    description:
      "Atomic Headless CMS provides complete content management through flexible interface and custom role for different user.",
    icon: <BsGear className="inline-block text-4xl" />,
  },
  {
    id: "4",
    title: "Atomic Headless E-commerce",
    description:
      "To provide business with useful system to operate vandor and e-commerce, Atomic Headless E-commerce has built-in payment system and vandor management system with many third party service.",
    icon: <BsCoin className="inline-block text-4xl" />,
  },
  {
    id: "5",
    title: "Atomic Image Processing",
    description:
      "Image processing is an important part of an application to transform and menipulate images. Atomic Image Processing use AI to remove background, create avatar, add filter and much more.",
    icon: <BsCardImage className="inline-block text-4xl" />,
  },
  {
    id: "6",
    title: "Atomic Video Processing",
    description:
      "Atomic Video Processing enables application to edit video such as remove audio, resize and crop video and much more.",
    icon: <BsPlayBtn className="inline-block text-4xl" />,
  },
];
