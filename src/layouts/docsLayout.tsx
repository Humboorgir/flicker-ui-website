import { docsPages } from "@/config/docs";
import { useRouter } from "next/router";

import Container from "@/components/ui/container";
import Navbar from "@/components/docs/navbar";
import Sidebar from "@/components/docs/sidebar";
import TableOfContent from "@/components/docs/tableOfContent";
import Footer from "@/components/ui/footer";

import Head from "next/head";
import Row from "@/components/ui/row";
import Typography from "@/components/ui/typography";
import Button from "@/components/ui/button";
import PreviewBox from "@/components/docs/previewBox";

import {
  IoIosArrowForward as ArrowForward,
  IoIosArrowBack as ArrowBack,
} from "react-icons/io";

type Props = {
  children: React.ReactNode;
  docsPages: string[];
  tableOfContent: any;
  meta: { title: string; description: string; preview?: string };
};
const DocsLayout = ({ children, tableOfContent, meta }: Props) => {
  const router = useRouter();

  const allPages = docsPages.map((category) => category.items).flat();
  const currentPageIndex = allPages.findIndex(
    (page) => page.href == router.pathname
  );
  const prevPage = allPages[currentPageIndex - 1]
    ? allPages[currentPageIndex - 1]
    : null;
  const nextPage = allPages[currentPageIndex + 1]
    ? allPages[currentPageIndex + 1]
    : null;
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
                Docs <ArrowForward className="h-3 w-3 ml-2" />
              </span>
              <span className="font-medium text-foreground">{meta.title}</span>
            </Row>
            <Typography className="mb-4 md:text-4xl" variant="h2">
              {meta.title}
            </Typography>
            <Typography variant="lead">{meta.description}</Typography>

            {meta.preview ? (
              <PreviewBox className="mt-4 mb-16" component={meta.preview} />
            ) : (
              <br />
            )}
            {children}

            <div className="mt-20 flex items-center">
              {prevPage && (
                <Button
                  href={prevPage.href}
                  size="lg"
                  className="text-base"
                  variant="outline">
                  <ArrowBack className="w-4 h-4 mr-auto" />
                  {prevPage.label}
                </Button>
              )}
              {nextPage && (
                <Button
                  href={nextPage.href}
                  size="lg"
                  className="text-base ml-auto"
                  variant="outline">
                  {nextPage.label}
                  <ArrowForward className="w-4 h-4 ml-1" />
                </Button>
              )}
            </div>
          </Container>
          <TableOfContent tableOfContent={tableOfContent} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DocsLayout;
