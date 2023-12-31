import Navbar from "@/components/components/navbar";
import Footer from "@/components/components/footer";

const ComponentsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen bg-background text-foreground">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default ComponentsLayout;
