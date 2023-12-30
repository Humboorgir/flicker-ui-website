import Button from "@/components/ui/button";

const Home = () => {
  return (
    <div className="text-foreground min-h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-1">The Ultimate Component Library</h1>
      <p className="text-2xl font-bold text-foreground/60 mb-4">
        Well-animated tailwindcss components inspired by Shadcn-UI & Material-UI
      </p>
      <div className="flex items-center justify-center">
        <Button className="mr-4 w-[280px]" size="lg">
          View Components
        </Button>
        <Button className="w-[280px]" variant="outline" size="lg">
          See Docs
        </Button>
      </div>
    </div>
  );
};

export default Home;
