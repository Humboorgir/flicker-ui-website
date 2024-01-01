import Container from "@/components/ui/container";
// temporarily using components page's navbar & footer
import Navbar from "@/components/components/navbar";
import Sidebar from "@/components/docs/sidebar";
import Footer from "@/components/components/footer";

const ComponentsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Container className="py-8 grow">{children}</Container>
      </div>
      <Footer />
    </div>
  );
};

export default ComponentsLayout;
