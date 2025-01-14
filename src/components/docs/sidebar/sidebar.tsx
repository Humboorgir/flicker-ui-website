import { docsPages } from "@/config/docs";
import Category from "./category";

const Sidebar = () => {
  return (
    // TODO: replace divs with semantic html (aside, ul and li)
    // TODO: modify scroll bar style (make it thinner)
    <nav className="sticky top-[84px] h-screen hidden md:flex w-[16rem] flex-col items-stretch px-4 ">
      {docsPages.map((category, i) => {
        return <Category key={i} category={category} />;
      })}
    </nav>
  );
};

export default Sidebar;
