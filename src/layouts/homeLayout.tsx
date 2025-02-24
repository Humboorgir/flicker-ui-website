import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";
import Head from "next/head";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>FlickerUI ~ Your own component library</title>
        <meta
          name="description"
          content="Kind of like if Material UI and Shadcn UI had a child!
          FlickerUI is a collection of production-ready React components made with Tailwindcss and Framer-motion."
        />
        {/* For google search console  */}
        <meta name="google-site-verification" content="QO-lxdsh8D6jOln1yKBqunTwhNY79GcA9ndCWXN2cDI" />
      </Head>
      <div className="grid grid-rows-[auto,1fr,auto] min-h-screen bg-background text-foreground">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
