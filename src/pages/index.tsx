import HomeLayout from "@/layouts/homeLayout";
import Button from "@/components/ui/button";

const Home = () => {
  return (
    <div className="flex flex-col items-center text-center justify-center max-w-[98vw] px-6 pb-12">
      <h1 className="text-3xl md:text-6xl font-extrabold mb-1 tracking-tight">
        The Ultimate Component Library
      </h1>
      <p className="text-lg md:text-2xl font-bold text-foreground/60 mb-4 tracking-tight">
        Well-animated tailwindcss components inspired by Shadcn-UI & Material-UI
      </p>
      <div className="flex items-center justify-center">
        <Button className="mr-4 w-[180px] md:w-[280px] md:text-xl md:py-3" href="/components">
          View Components
        </Button>
        <Button className="w-[180px] md:w-[280px] md:text-xl md:py-3" variant="outline">
          See Docs
        </Button>
      </div>
    </div>
  );
};

Home.getLayout = function Layout(Page: React.ReactElement) {
  return <HomeLayout>{Page}</HomeLayout>;
};

export default Home;
