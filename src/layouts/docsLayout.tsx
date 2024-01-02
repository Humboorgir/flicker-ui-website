import Container from "@/components/ui/container";
// temporarily using components page's navbar & footer
import Navbar from "@/components/docs/navbar";
import Sidebar from "@/components/docs/sidebar";
import TableOfContent from "@/components/docs/tableOfContent";
import Footer from "@/components/components/footer";

import Head from "next/head";

type Props = {
  children: React.ReactNode;
  tableOfContent: any;
  metadata: { title: string; description: string };
};
const DocsLayout = ({ children, tableOfContent, metadata }: Props) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <div className="grid grid-rows-[auto,1fr,auto] min-h-screen bg-background">
        <Navbar />
        <div className="flex pt-12">
          <Sidebar />
          <Container className="py-8 grow">{children}</Container>
          <TableOfContent tableOfContent={tableOfContent} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DocsLayout;
