import { MdInfoOutline as InfoIcon } from "react-icons/md";

type NoteProps = {
  children: React.ReactNode;
};

const Note = ({ children }: NoteProps) => {
  return (
    <div
      className="relative flex flex-col my-6 p-2 rounded-md overflow-hidden
      bg-black text-white/90 dark:bg-white/90 dark:text-black">
      <strong className="text-background flex mr-2 tracking-wider h-fit text-lg mb-1.5 border-b-2 border-white dark:border-black pb-1 w-fit">
        <InfoIcon className="mt-[4px] h-5 w-5 mr-1" /> Note
      </strong>
      {children}
    </div>
  );
};

export default Note;
