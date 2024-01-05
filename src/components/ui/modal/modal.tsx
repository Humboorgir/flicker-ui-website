import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  open: boolean;
  handleClose: React.MouseEventHandler;
  className?: string;
};

const Modal = ({ children, open, handleClose, className, ...props }: Props) => {
  return (
    <AnimatePresence>
      {/* backdrop  */}
      {open && (
        <motion.div
          key="backdrop"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 100,
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.2,
            delay: 0.1,
          }}
          className="fixed left-0 right-0 top-0 bottom-0 bg-black/60 z-[100] grid place-items-center"
          onClick={handleClose}>
          {/* modal window  */}
          {open && (
            <motion.div
              key="modal"
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{
                duration: 0.1,
                delay: 0.1,
                ease: "easeOut",
              }}
              onClick={(e) => e.stopPropagation()}
              className={cn(
                `bg-background text-foreground p-6 max-w-[90vw] ease-out rounded-md 
                flex flex-col items-center border border-ring`,
                className
              )}
              {...props}>
              {children}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
