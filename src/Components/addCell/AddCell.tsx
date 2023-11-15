import { useActions } from "../../hooks/useActions";
import "./AddCell.css";

interface AddCellProps {
  nextCellId: string | null;
}

const AddCell: React.FC<AddCellProps> = ({ nextCellId }) => {
  const { insertCellAfter } = useActions();

  return (
    <div className="add-new-cell">
      <div className="add-new-container">
        <button
          className="add-new-btn"
          onClick={() => insertCellAfter(nextCellId, "text")}
        >
          Text
        </button>
        <button
          className="add-new-btn"
          onClick={() => insertCellAfter(nextCellId, "code")}
        >
          Code
        </button>
      </div>
    </div>
  );
};

export default AddCell;
