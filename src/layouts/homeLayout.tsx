import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen bg-background text-foreground">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
