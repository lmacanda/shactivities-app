import { Waypoints } from "lucide-react";
import { cn } from "@/lib/utils";

import { Poppins } from "next/font/google";

import { Button } from "@/components/ui/button";

import Link from "next/link";

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-lime-100 text-lime-700  uppercase">
          <Waypoints className="h-6 w-6 mr-2" />
          <span className="text-lg font-bold">Welcome to Shactivities</span>
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Share your desired future activities with your friends
        </h1>
        <div className="text-3xl md:text-6xl bg-black text-white px-4 p-2 rounded-md pb-4 w-fit">
          Let's go togheter
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        the ultimate platform to share and discover activities with your
        friends! Whether it's a cozy dinner at a new restaurant, an adventurous
        weekend getaway, or a fun-filled event in the city, MyActivityApp helps
        you plan and organize your social life effortlessly.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get Started</Link>
      </Button>
    </div>
  );
};

export default LandingPage;
