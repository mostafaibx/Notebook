import { useActions } from "../../hooks/useActions";
import "./AddCell.css";

interface AddCellProps {
  nextCellId: string | null;
}

const AddCell: React.FC<AddCellProps> = ({ nextCellId }) => {
  const { insertCellAfter } = useActions();

  return (
    <div className="add-new-cell hover:add-new-cell-hover">
      <button
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded mr-2"
        onClick={() => insertCellAfter(nextCellId, "text")}
      >
        Text
      </button>
      <button
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded mr-2"
        onClick={() => insertCellAfter(nextCellId, "code")}
      >
        Code
      </button>
    </div>
  );
};

export default AddCell;
