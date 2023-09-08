"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useHomePageStore } from "@/lib/app-stores/home-page-store";
import clsx from "clsx";
import React, { Children } from "react";
import { BsBox, BsDatabase, BsFolder, BsImages, BsPlay } from "react-icons/bs";

export const HostingIcons = ({
  children,
  id,
  tooltip = "",
}: {
  children: React.ReactNode;
  id: string;
  tooltip?: string;
}) => {
  const [selectedHosting, setSeletedHosting] = useHomePageStore((state) => [
    state.selectedHosting,
    state.setSeletedHosting,
  ]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            className={clsx(
              selectedHosting === id ? "bg-accent" : "bg-white/0"
            )}
            onClick={() => setSeletedHosting(id)}
          >
            {children}
          </Button>
        </TooltipTrigger>

        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const HostingCard = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const selectedHosting = useHomePageStore((state) => state.selectedHosting);
  return (
    <div
      className={clsx(
        "absolute top-0 space-y-3 transition-opacity",
        selectedHosting === id ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
    </div>
  );
};

export const HostingImageContainer = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const selectedHosting = useHomePageStore((state) => state.selectedHosting);

  return (
    <div
      className={clsx(
        "absolute top-0 w-full transition-opacity",
        selectedHosting === id ? "opacity-100" : "opacity-0"
      )}
    >
      <AspectRatio ratio={2 / 1}>{children}</AspectRatio>
    </div>
  );
};

export const DatabaseImg = () => {
  return <div className="w-full h-full bg-blue-500">Database</div>;
};
export const AIModelImg = () => {
  return <div className="w-full h-full bg-green-500">AI Model</div>;
};
export const ImageImg = () => {
  return <div className="w-full h-full bg-red-500">Image</div>;
};
export const VideoImg = () => {
  return <div className="w-full h-full bg-yellow-500">Video</div>;
};
export const FileImg = () => {
  return <div className="w-full h-full bg-sky-500">File</div>;
};

export const hostingDetails = [
  {
    id: "1",
    title: "Database",
    description:
      "Database is a the most important aspect of an application. Atomic Database solution provides a smooth experience with scaleability and performance while maintianing hassle-free implementation.",
    icon: <BsDatabase className="text-4xl" />,
    image: DatabaseImg,
    tooltip: "Database Hosting",
  },
  {
    id: "2",
    title: "AI Model",
    description:
      "Hosting an AI model can be painful. But AtomiCloud makes it a painless and developer friendly experience. Our own Jupyter Notebook helps ML engineer to write and train new AI model and host them for mass consumption or personal use.",
    icon: <BsBox className="text-4xl" />,
    image: AIModelImg,
    tooltip: "AI Model Hosting",
  },
  {
    id: "3",
    title: "Image",
    description:
      "Easily upload and host images from the web and mobile applications.",
    icon: <BsImages className="text-4xl" />,
    image: ImageImg,
    tooltip: "Image Hosting and Upload",
  },
  {
    id: "4",
    title: "Video",
    description:
      "Easily upload and host videos from the web and mobile applications.",
    icon: <BsPlay className="text-4xl" />,
    image: VideoImg,
    tooltip: "Video Hosting and Upload",
  },
  {
    id: "5",
    title: "File",
    description:
      "Easily upload and host files from the web and mobile applications.",
    icon: <BsFolder className="text-4xl" />,
    image: FileImg,
    tooltip: "File Hosting and Upload",
  },
];
