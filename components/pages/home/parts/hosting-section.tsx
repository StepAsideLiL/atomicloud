"use client";

import { Button } from "@/components/ui/button";
import { useHomePageStore } from "@/lib/app-stores/home-page-store";
import clsx from "clsx";
import React from "react";
import { BsBox, BsDatabase, BsFolder, BsImages, BsPlay } from "react-icons/bs";

export const HostingIcons = () => {
  return (
    <div>
      <Button variant="ghost">
        <BsDatabase className="text-4xl" />
      </Button>

      <Button variant="ghost">
        <BsBox className="text-4xl" />
      </Button>

      <Button variant="ghost">
        <BsImages className="text-4xl" />
      </Button>

      <Button variant="ghost">
        <BsPlay className="text-4xl" />
      </Button>

      <Button variant="ghost">
        <BsFolder className="text-4xl" />
      </Button>
    </div>
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
        "absolute top-0 space-y-3",
        selectedHosting === id ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
    </div>
  );
};

export const hostingDetails = [
  {
    id: "1",
    title: "Database",
    description: "",
    image: "",
  },
  {
    id: "2",
    title: "AI Model",
    description: "",
    image: "",
  },
  {
    id: "3",
    title: "Image",
    description: "",
    image: "",
  },
  {
    id: "4",
    title: "Video",
    description: "",
    image: "",
  },
  {
    id: "5",
    title: "File",
    description: "",
    image: "",
  },
];
