import { Foaling } from "@/components/dashboard/foaling/Foaling";
import { FoalingTable } from "@/app/foaling/foaling-table/FoalingTable";

export default async function FoalingPage() {
  return (
    <article className="flex-1 space-y-1 p-2 pt-2 md:space-y-4 md:pt-6">
      <Foaling>
        <FoalingTable />
      </Foaling>
    </article>
  );
}
