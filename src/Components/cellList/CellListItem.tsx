import { Cell } from "../../Store/cell";
import ActionBar from "../actionBar/ActionBar";
import CodeCell from "../codeCell/CodeCell";
import TextEditor from "../textEditor/TextEditor";

interface cellItemProps {
  cell: Cell;
  key?: string;
}
const CellListItem: React.FC<cellItemProps> = ({ cell }) => {
  //Conditional rendering the cells based on the type of them
  let child: JSX.Element = <div />;
  if (cell.type === "code") {
    child = <CodeCell cell={cell} />;
  } else if (cell.type === "text") {
    child = <TextEditor cell={cell} />;
  }
  return (
    <div className="mt-7 p-6 rounded-xl bg-gray-500">
      <ActionBar id={cell.id} />
      {child}
    </div>
  );
};

export default CellListItem;
