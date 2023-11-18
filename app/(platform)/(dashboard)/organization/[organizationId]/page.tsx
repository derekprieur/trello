import BoardList from "@/components/organizationId/BoardList";
import Info from "@/components/organizationId/Info";
import { Separator } from "@/components/ui/separator";

const OrganizationIdPage = async () => {
  return (
    <div className="mb-20 w-full">
      <Info />
      <Separator className="my-4" />
      <div className="px-2 md:px-4">
        <BoardList />
      </div>
    </div>
  );
};

export default OrganizationIdPage;
