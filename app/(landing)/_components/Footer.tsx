import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full h-14 flex items-center  p-4 bg-lime-100 text-lime-700">
      <div className="md:max-w-screen-2xl mx-auto flex items-center justify-between w-full">
        <Button size="sm" variant="ghost">
          Privacy Policy
        </Button>
        <Button size="sm" variant="ghost">
          Terms of Service
        </Button>
      </div>
    </div>
  );
};
