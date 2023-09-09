"use client";

import { ServicesCard, serviceDetails } from "./parts/service-section";

const Services = () => {
  return (
    <section className="py-10 bg-gray-200">
      <div className="container mx-auto max-w-7xl">
        <h1>Services</h1>

        <div className="grid grid-cols-3 gap-10">
          {serviceDetails.map((list) => (
            <ServicesCard key={list.id} list={list} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
