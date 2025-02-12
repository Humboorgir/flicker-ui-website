import Button from "@/components/ui/button";
import Typography from "@/components/ui/typography";

import { useState } from "react";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

import { IoIosArrowDown as ArrowDown } from "react-icons/io";

type CategoryProps = {
  category: {
    label: string;
    items: {
      label: string;
      href: string;
    }[];
  };
};

const Category = ({ category }: CategoryProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const easeOut = [0, 0, 0.2, 1];
  const duration = category.items.length > 3 ? 0.35 : 0.3;
  function toggleOpen() {
    setOpen((prev) => !prev);
  }

  return (
    <div className="relative mb-1">
      {/* title  */}
      <Button
        rippleColor="#8c8c8c"
        variant="ghost"
        onClick={toggleOpen}
        className="hover:bg-transparent w-full h-fit !py-0 px-3 mb-1 flex items-center justify-start">
        <Typography className="text-[15px] flex items-center tracking-wide" variant="h4">
          {category.label}
        </Typography>
        <ArrowDown
          className={cn(
            "h-4 w-4 ml-auto transition-transform ease-out duration-[250ms]",
            !open && "-rotate-90"
          )}
        />
      </Button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{
              height: 0,
              y: -8,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              y: 0,
              opacity: 1,
            }}
            exit={{ height: 0, y: -8, opacity: 0 }}
            transition={{
              duration: duration,
              delay: 0.1,
              ease: easeOut,
            }}
            className="origin-bottom">
            {category.items &&
              category.items.map((item, i) => {
                const isCurrentPage = router.pathname == item.href;

                return (
                  <Button
                    key={i}
                    variant="link"
                    href={item.href}
                    className={cn(
                      "text-sm py-2 justify-start text-left text-foreground-light/80 pl-6 pr-3.5 w-full",
                      isCurrentPage && "bg-foreground-light/10 text-foreground"
                    )}>
                    {item.label}
                  </Button>
                );
              })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Category;
