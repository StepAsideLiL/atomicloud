"use client";

import {
  hostingDetails,
  HostingCard,
  HostingIcons,
  HostingImageContainer,
} from "./parts/hosting-section";

const Hosting = () => {
  return (
    <section className="container py-10 mx-auto max-w-7xl">
      <div className="flex items-start w-full gap-10 h-96">
        <div className="w-full space-y-8">
          <h1 className="text-3xl font-bold">
            We Provide Hosting Services For Your Business
          </h1>

          <div className="flex">
            {hostingDetails.map((list) => (
              <HostingIcons key={list.id} id={list.id} tooltip={list.tooltip}>
                {list.icon}
              </HostingIcons>
            ))}
          </div>

          <div>
            <div className="relative top-0">
              {hostingDetails.map((list) => (
                <HostingCard key={list.id} id={list.id}>
                  <h1 className="text-2xl font-medium">{list.title}</h1>
                  <p>{list.description}</p>
                </HostingCard>
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-full">
          <div className="relative top-0 w-full">
            {hostingDetails.map((list) => (
              <HostingImageContainer key={list.id} id={list.id}>
                <list.image />
              </HostingImageContainer>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hosting;
