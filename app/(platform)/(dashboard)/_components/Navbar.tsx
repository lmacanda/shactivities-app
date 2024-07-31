import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14  bg-slate-100 z-50">
      {/*Mobile Sidebar*/}
      <div className="flex justify-between items-center h-full px-4 gap-x-4">
        <div className="hidden md:flex">Shactivities</div>
        <Button
          size="sm"
          className="hidden rounded-sm md:block h-auto py-1.5 px-2"
        >
          Create
        </Button>
        <Button size="sm" className="rounded-sm block md:hidden">
          <Plus className="h-4 w-4" />
        </Button>

        <div className="ml-auto flex items-center gap-x-2">
          <OrganizationSwitcher
            afterCreateOrganizationUrl="/organization/:id"
            afterSelectOrganizationUrl="/organization/:id"
            afterLeaveOrganizationUrl="/select-org"
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              },
            }}
          />
          <UserButton
            appearance={{
              elements: {
                avatarBox: {
                  height: 30,
                  width: 30,
                },
              },
            }}
          />
          <div className="text-white">Dashboard</div>
          <div className="text-white">Profile</div>
          <div className="text-white">Logout</div>
        </div>
      </div>
    </div>
  );
};
