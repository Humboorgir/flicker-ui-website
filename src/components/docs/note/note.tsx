import { MdInfoOutline as InfoIcon } from "react-icons/md";

type NoteProps = {
  children: React.ReactNode;
};

const Note = ({ children }: NoteProps) => {
  return (
    <div
      className="relative flex flex-col my-6 dark:bg-sky-400/10 dark:text-sky-200 p-2 rounded-md overflow-hidden
    text-sky-700 bg-sky-400/10">
      <div className="h-6 -translate-y-1/2 w-1/4 left-0 top-1/2 absolute bg-sky-600/40 blur-2xl" />
      <strong
        className="text-sky-600 dark:text-sky-300 flex mr-2 tracking-wider h-fit text-lg mb-1.5 border-b-2 border-sky-600/70 
      dark:border-sky-300/70 pb-1 w-fit">
        <InfoIcon className="mt-[4px] h-5 w-5 mr-1" /> Note
      </strong>
      {children}
    </div>
  );
};

export default Note;
