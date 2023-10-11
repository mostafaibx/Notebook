import { useActions } from "../../hooks/useActions";

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  return (
    <div className="bg-gray-300 p-1 flex items-center justify-end rounded-t-xl">
      <button
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded-lg mr-2"
        onClick={() => moveCell(id, "up")}
      >
        Up
      </button>
      <button
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded-lg mr-2"
        onClick={() => moveCell(id, "down")}
      >
        Down
      </button>
      <button
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-lg mr-2"
        onClick={() => deleteCell(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default ActionBar;
