import Container from "@/components/ui/container";
import Navbar from "@/components/docs/navbar";
import Sidebar from "@/components/docs/sidebar";
import TableOfContent from "@/components/docs/tableOfContent";
import Footer from "@/components/ui/footer";

import Head from "next/head";
import Row from "@/components/ui/row";
import Typography from "@/components/ui/typography";

import { IoIosArrowForward as Arrow } from "react-icons/io";

type Props = {
  children: React.ReactNode;
  tableOfContent: any;
  meta: { title: string; description: string };
};
const DocsLayout = ({ children, tableOfContent, meta }: Props) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <div className="grid grid-rows-[auto,1fr,auto] min-h-screen bg-background">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <Container className="py-8 mx-0 grow w-[1px]">
            <Row className="mb-4 text-sm">
              <span className="flex items-center text-foreground-muted mr-2">
                Documentation <Arrow className="h-3 w-3 ml-2" />
              </span>
              <span className="font-medium text-foreground">{meta.title}</span>
            </Row>
            <Typography className="mb-4 md:text-4xl" variant="h2">
              {meta.title}
            </Typography>
            <Typography variant="p">{meta.description}</Typography>
            <br />
            {children}
          </Container>
          <TableOfContent tableOfContent={tableOfContent} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DocsLayout;
