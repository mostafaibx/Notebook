import { Fragment } from "react";
import { Cell } from "../../Store/cell";
import useTypedSelector from "../../hooks/useTypedSelector";
import AddCell from "../addCell/AddCell";
import CellListItem from "./CellListItem";

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) => {
    return order.map((id) => data[id]);
  });

  return (
    <div className="container mx-auto p-2 text-white">
      {cells.map((cell: Cell) => (
        <div
          key={cell.id}
          className="flex flex-col items-center justify-center"
        >
          <CellListItem cell={cell} />
          <AddCell nextCellId={cell.id} />
        </div>
      ))}
    </div>
  );
};

export default CellList;
