import { OrgControl } from "./_components/org-control";

const OrganiationIdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <OrgControl />
      {children}
    </main>
  );
};

export default OrganiationIdLayout;
