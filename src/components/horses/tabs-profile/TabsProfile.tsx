"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Information } from "@/components/horses/tabs-profile/tabs/information/Information";
import { Images } from "@/components/horses/tabs-profile/tabs/images/Images";
import { Children } from "@/components/horses/tabs-profile/tabs/children/Children";
import { Vet } from "@/components/horses/tabs-profile/tabs/vet/Vet";

export function TabsProfile() {
  const [tab, setTab] = useState("information");

  const onTabChange = (value: any) => {
    setTab(value);
  };

  return (
    <Tabs value={tab} onValueChange={onTabChange} className="w-full ">
      <TabsList className="grid w-full grid-cols-4 mb-10 bg-zinc-100 rounded-md">
        <TabsTrigger className="rounded-md" value="information">
          Information
        </TabsTrigger>
        <TabsTrigger className="rounded-md" value="vet">
          Vet
        </TabsTrigger>
        <TabsTrigger className="rounded-md" value="images">
          Images
        </TabsTrigger>
        <TabsTrigger className="rounded-md" value="children">
          Children
        </TabsTrigger>
      </TabsList>
      <TabsContent value="information">
        <Information />
      </TabsContent>
      <TabsContent value="vet">
        <Vet />
      </TabsContent>
      <TabsContent value="images">
        <Images />
      </TabsContent>
      <TabsContent value="children">
        <Children />
      </TabsContent>
    </Tabs>
  );
}
