import { Button } from "@/components/ui/button";
import Link from "next/link";
import dashboardImage from "@/assets/images/dashboard.jpeg";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="max-w-5xl py-10 mx-auto">
      <div className="text-center">
        <h1 className="font-bold text-8xl">
          Home for All Your Business-Related Solutions.
        </h1>

        <p className="text-2xl font-semibold">
          Business is all about presentation of products and services. We take
          care of the backend so that you can focus on your frontend.
        </p>

        <div className="space-x-2">
          <Button asChild>
            <Link href="">Get Started For Free {"->"}</Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="">Documentation</Link>
          </Button>
        </div>
      </div>

      <div className="w-full">
        <Image
          src={dashboardImage}
          alt=""
          className="object-contain w-full h-full"
        />
      </div>
    </section>
  );
};

export default Banner;
