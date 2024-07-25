const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center pt-10 md:-30">
      {children}
    </div>
  );
};

export default ClerkLayout;
