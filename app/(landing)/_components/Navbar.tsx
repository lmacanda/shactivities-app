import { Button } from "@/components/ui/button";

import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 flex items-center  p-4 bg-lime-100 text-lime-700">
      <div className="md:max-w-screen-2xl mx-auto flex items-center justify-between w-full">
        <div className="text-lg font-bold">Shactivities</div>
        <div className="space-x-4 md:block md:w-auto flex justify-end w-full">
          <Button size="sm" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">Sign-Up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
