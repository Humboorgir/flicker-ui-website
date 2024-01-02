import Container from "@/components/ui/container";
// temporarily using components page's navbar & footer
import Navbar from "@/components/components/navbar";
import Sidebar from "@/components/docs/sidebar";
import TableOfContent from "@/components/docs/tableOfContent";
import Footer from "@/components/components/footer";

const DocsLayout = ({ children, tableOfContent }: { children: React.ReactNode; tableOfContent: any }) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen bg-background">
      <Navbar />
      <div className="flex pt-12">
        <Sidebar />
        <Container className="py-8 grow">{children}</Container>
        <TableOfContent tableOfContent={tableOfContent} />
      </div>
      <Footer />
    </div>
  );
};

export default DocsLayout;
