import { MdInfoOutline as InfoIcon } from "react-icons/md";

type NoteProps = {
  children: React.ReactNode;
};

const Note = ({ children }: NoteProps) => {
  return (
    <div
      className="relative flex flex-col my-6 !pl-3 p-2
      text-foreground-light bg-gray-300/20 dark:bg-gray-400/10">
      <div className="absolute h-full w-0.5 top-0 left-0 bg-foreground" />
      <strong className="text-foreground flex mr-2 tracking-wider h-fit text-lg mb-1.5 pb-1 w-fit">
        <InfoIcon className="mt-[4px] h-5 w-5 mr-1" aria-hidden /> Note
      </strong>
      {children}
    </div>
  );
};

export default Note;
