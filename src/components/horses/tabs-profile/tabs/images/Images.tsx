import { Carousel } from "@/components/ui/carousel";
import React from "react";
import Image from "next/image";

export const Images = () => {
  return (
    <Carousel className="w-full grid md:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-3">
      <div className="border-b-4 md:border-none mb-2">
        <Image
          alt="The best spots in Greece for harvest time wine holidays"
          height="400"
          src="/horse.jpg"
          style={{
            aspectRatio: "600/400",
            objectFit: "cover",
          }}
          width="600"
        />
        <h3 className="text-sm uppercase tracking-wide text-gray-500">Taste</h3>
        <p>The best spots in Greece for harvest time wine holidays</p>
      </div>
      <div className="border-b-4 md:border-none mb-2">
        <Image
          alt="Unique Grecian architecture you don't want to miss"
          height="400"
          src="/horse.jpg"
          style={{
            aspectRatio: "600/400",
            objectFit: "cover",
          }}
          width="600"
        />
        <h3 className="text-sm uppercase tracking-wide text-gray-500">Visit</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          ducimus at a pariatur adipisci neque asperiores molestias reiciendis?
          Voluptatem ratione inventore culpa, expedita illo quaerat maiores
        </p>
      </div>
      <div className="border-b-4 md:border-none mb-2">
        <Image
          alt="Local cuisine to sample on your next holiday to Greece"
          height="400"
          src="/horse.jpg"
          style={{
            aspectRatio: "600/400",
            objectFit: "cover",
          }}
          width="600"
        />
        <h3 className="text-sm uppercase tracking-wide text-gray-500">Taste</h3>
        <p>Local cuisine to sample on your next holiday to Greece</p>
      </div>
      <div className="border-b-4 md:border-none mb-2">
        <Image
          alt="Our favourite secluded villas for your next European holiday"
          height="400"
          src="/horse.jpg"
          style={{
            aspectRatio: "600/400",
            objectFit: "cover",
          }}
          width="600"
        />
        <h3 className="text-sm uppercase tracking-wide text-gray-500">Relax</h3>
        <p>Our favourite secluded villas for your next European holiday</p>
      </div>
    </Carousel>
    // </div>
  );
};
