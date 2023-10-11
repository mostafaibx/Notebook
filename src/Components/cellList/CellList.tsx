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
    <div className="container mx-auto p-2 bg-gray-800 text-white rounded-xl">
      {cells.map((cell: Cell) => (
        <Fragment key={cell.id}>
          <CellListItem cell={cell} />
          <AddCell nextCellId={cell.id} />
        </Fragment>
      ))}
    </div>
  );
};

export default CellList;
