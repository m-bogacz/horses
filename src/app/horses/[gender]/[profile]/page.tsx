import { TabsProfile } from "@/components/horses/tabs-profile/TabsProfile";
import { format } from "date-fns";
import Image from "next/image";
import { ActiveLink } from "@/shared/active-link/ActiveLink";
import React from "react";
import { AddNewInsemination } from "@/components/dashboard/insemination/form/add-new-insemination/AddNewInsemination";

const horse = {
  name: "Kahla",
  place: "Stable",
  age: 6,
  imgSrc: "/horse.jpg",
  mother: "Mother Horse",
  father: "Father Horse",
  gender: "mare",
};

export default function HorsePage({
  params,
}: {
  params: { gender: string; profile: string };
}) {
  const { gender } = params;
  return (
    <article className="space-y-1 p-2 pt-2 md:space-y-2 md:p-2 md:pt-6 ">
      <div className="grid max-w-7xl min-h-screen gap-6 px-4 mx-auto lg:grid-cols-[250px_1fr] lg:px-6 xl:gap-10">
        <div className="py-10 space-y-4 lg:border-r lg:block">
          <div className="flex flex-col items-center space-y-2">
            <Image
              alt="Avatar"
              className="rounded-full"
              height="200"
              src={horse.imgSrc}
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="200"
            />
            <div className="text-center">
              <h1 className="text-xl font-bold">{horse.name}</h1>
            </div>
          </div>
          <div className="space-y-2 ">
            <p className="font-semibold">Bio</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Kahla is a five-year-old German Warmblood mare. She shows great
              potential for jumping, easily clearing obstacles up to 1.2 meters.
              Energetic and eager to learn, she is an ideal horse for further
              training in show jumping.
            </p>
          </div>

          <div className="">
            <InfoData title="Birthday:">
              {format(new Date(2015, 3, 23), "LLL dd, y")}
            </InfoData>
            <InfoData title="Mother:">
              <ActiveLink href={`/horses/${gender}/${horse.mother}`}>
                {horse.mother}
              </ActiveLink>
            </InfoData>
            <InfoData title="Father:">
              <ActiveLink href={`/horses/${gender}/${horse.father}`}>
                {horse.father}
              </ActiveLink>
            </InfoData>
            <InfoData title="Place:">
              <span className="text-sm w-min text-gray-500 hover:text-gray-700 hover:border-b-3 border-slate-300">
                Podągi
              </span>
            </InfoData>
            {horse.gender === "mare" ? (
              <AddNewInsemination name={horse.name} />
            ) : null}
          </div>
        </div>
        <div className="space-y-6 lg:space-y-10">
          <div className="flex flex-col space-y-2 lg:space-y-4">
            <div className="flex items-center space-x-2">
              <ActiveLink className="text-sm font-medium underline" href="/">
                {`< Back`}
              </ActiveLink>
            </div>
          </div>
          <div className="space-y-4">
            <TabsProfile />
          </div>
        </div>
      </div>
    </article>
  );
}

const InfoData = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="grid grid-cols-[60px_1fr] gap-4 mb-3 border-b ">
      <div className="text-sm mb-1 w-15 font-semibold dark:text-gray-400">
        {title}
      </div>
      <div className="items-start text-sm">{children}</div>
    </div>
  );
};
