"use client";

import { useProductStore } from "@/lib/app-stores/store";
import clsx from "clsx";
import { useInView } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export const ProductCard = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  const setInViewProduct = useProductStore((state) => state.setInViewProduct);

  useEffect(() => {
    if (isInView) {
      setInViewProduct(id);
    }
  }, [id, isInView, setInViewProduct]);

  return (
    <div
      ref={ref}
      className={clsx(
        "py-3 transition-colors space-y-2",
        isInView ? "text-black" : "text-gray-400"
      )}
    >
      {children}
    </div>
  );
};

export const ProductImage = ({
  src,
  alt = "",
}: {
  src: string;
  alt?: string;
}) => {
  return (
    <div className="w-full">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain w-full h-full"
      />
    </div>
  );
};

const CardContainer = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const inViewProduct = useProductStore((state) => state.inViewProduct);

  return (
    <div
      className={clsx(
        "absolute inset-0 w-full h-full transition-opacity",
        inViewProduct === id ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
    </div>
  );
};

export const DatabaseCard = ({ id }: { id: string }) => {
  return (
    <CardContainer id={id}>
      <div className="w-full h-full bg-slate-700">
        <h1 className="text-2xl font-extrabold">Database</h1>
      </div>
    </CardContainer>
  );
};

export const AuthenticationCard = ({ id }: { id: string }) => {
  return (
    <CardContainer id={id}>
      <div className="w-full h-full bg-blue-700">
        <h1 className="text-2xl font-extrabold">Authentication</h1>
      </div>
    </CardContainer>
  );
};

export const HCMSCard = ({ id }: { id: string }) => {
  return (
    <CardContainer id={id}>
      <div className="w-full h-full bg-red-700">
        <h1 className="text-2xl font-extrabold">Headless CMS</h1>
      </div>
    </CardContainer>
  );
};

export const HEcommerceCard = ({ id }: { id: string }) => {
  return (
    <CardContainer id={id}>
      <div className="w-full h-full bg-green-700">
        <h1 className="text-2xl font-extrabold">Headless E-commerce</h1>
      </div>
    </CardContainer>
  );
};

export const AIModelCard = ({ id }: { id: string }) => {
  return (
    <CardContainer id={id}>
      <div className="w-full h-full bg-yellow-700">
        <h1 className="text-2xl font-extrabold">AI Model</h1>
      </div>
    </CardContainer>
  );
};

export const ImageAndViderCard = ({ id }: { id: string }) => {
  return (
    <CardContainer id={id}>
      <div className="w-full h-full bg-amber-700">
        <h1 className="text-2xl font-extrabold">Image and Video</h1>
      </div>
    </CardContainer>
  );
};

export const FileCard = ({ id }: { id: string }) => {
  return (
    <CardContainer id={id}>
      <div className="w-full h-full bg-fuchsia-700">
        <h1 className="text-2xl font-extrabold">File</h1>
      </div>
    </CardContainer>
  );
};

export const productsDetail = [
  {
    id: "1",
    title: "Database",
    description: "Easily scaleable database for enterprise and personal use",
    image: DatabaseCard,
  },
  {
    id: "2",
    title: "Authentication",
    description:
      "Implement hassle free authentication for web and mobile applications",
    image: AuthenticationCard,
  },
  {
    id: "3",
    title: "Headless CMS",
    description: "An easy and powerful Headless CMS for managing content",
    image: HCMSCard,
  },
  {
    id: "4",
    title: "Headless E-commerce",
    description: "Powerful E-commerce backend with payment API and support",
    image: HEcommerceCard,
  },
  {
    id: "5",
    title: "AI Model",
    description: "Powerful AI Models for providing useful services",
    image: AIModelCard,
  },
  {
    id: "6",
    title: "Image and Video Storage",
    description:
      "Easily store the image and video content for web and mobile application",
    image: ImageAndViderCard,
  },
  {
    id: "7",
    title: "File Storage",
    description: "Store any file format for web and mobile application",
    image: FileCard,
  },
];
