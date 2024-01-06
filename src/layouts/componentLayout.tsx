import Navbar from "@/components/components/navbar";
import Footer from "@/components/ui/footer";

const ComponentsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen bg-background">
      <Navbar />
      {children}
      <Footer className="mt-6 justify-center" />
    </div>
  );
};

export default ComponentsLayout;
