import { Insemination } from "@/components/dashboard/insemination/Insemination";
import { AddNewInsemination } from "@/components/dashboard/insemination/form/add-new-insemination/AddNewInsemination";

export default function InseminationPage() {
  return (
    <article className="flex-1 space-y-1 p-2 pt-2 md:space-y-4 md:pt-6">
      <AddNewInsemination />
      <Insemination />
    </article>
  );
}
