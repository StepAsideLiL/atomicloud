import Image from "next/image";
import React from "react";

export const ProductCard = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
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

export const productsDetail = [
  {
    title: "Database",
    image: "",
  },
  {
    title: "Authentication",
    image: "",
  },
  {
    title: "Headless CMS",
    image: "",
  },
  {
    title: "Headless E-commerce",
    image: "",
  },
  {
    title: "AI Model",
    image: "",
  },
  {
    title: "Image and Video Storage",
    image: "",
  },
  {
    title: "File Storage",
    image: "",
  },
];
