import { useActions } from "../../hooks/useActions";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  return (
    <div className="bg-sail-100 border-sail-200 p-1 flex items-center justify-end rounded-t-xl">
      <button
        className=" hover:bg-sail-200 text-sail-700 font-bold py-1 px-2 rounded-full mr-2 transform transition-all duration-300"
        onClick={() => moveCell(id, "up")}
      >
        <ArrowUpIcon className="w-5 h-5" />
      </button>
      <button
        className=" hover:bg-sail-200 text-sail-700 font-bold py-1 px-2 rounded-full mr-2 transform transition-all duration-300"
        onClick={() => moveCell(id, "down")}
      >
        <ArrowDownIcon className="w-5 h-5  " />
      </button>
      <button
        className=" hover:bg-red-500 text-red-500 hover:text-white font-bold py-1 px-2 rounded-lg mr-2 transform transition-all duration-300"
        onClick={() => deleteCell(id)}
      >
        <XMarkIcon className="w-5 h-5 " />
      </button>
    </div>
  );
};

export default ActionBar;
