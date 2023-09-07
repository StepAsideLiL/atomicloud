"use client";

import {
  HostingCard,
  HostingIcons,
  hostingDetails,
} from "./parts/hosting-section";

const Hosting = () => {
  return (
    <section className="container py-10 mx-auto max-w-7xl">
      <div className="flex items-center w-full gap-10">
        <div className="w-full">
          <h1 className="text-3xl font-bold">
            We Provide Hosting Services For Your Business
          </h1>

          <div>
            <HostingIcons />
          </div>

          <div className="relative inset-0">
            {hostingDetails.map((list) => (
              <HostingCard key={list.id} id={list.id}>
                <h1 className="text-2xl font-medium">{list.title}</h1>
                <p>{list.description}</p>
              </HostingCard>
            ))}
          </div>
        </div>

        <div className="w-full">m</div>
      </div>
    </section>
  );
};

export default Hosting;
