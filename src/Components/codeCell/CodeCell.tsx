import { useEffect } from "react";
import CodeEditor from "../codeEditor/CodeEditor";
import CodePrev from "../codePreview/CodePrev";
import { Cell } from "../../Store/cell";
import { useActions } from "../../hooks/useActions";
import useTypedSelector from "../../hooks/useTypedSelector";
import { useCumilativeCode } from "../../hooks/useCumilativeCode";

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const { updateCell, createBundle } = useActions();

  const bundle = useTypedSelector(
    (state) => state.bundle && state.bundle[cell.id]
  );

  const cumuilativeCode = useCumilativeCode(cell.id);

  useEffect(() => {
    if (!bundle) {
      createBundle(cell.id, cumuilativeCode);
      return;
    }

    setTimeout(async () => {
      createBundle(cell.id, cumuilativeCode);
    }, 4000);
  }, [cumuilativeCode, cell.id, createBundle]);

  return (
    <div className="flex flex-row h-full w-full">
      <CodeEditor
        key="1"
        initialValue={cell.content}
        onChange={(value) => {
          updateCell(cell.id, value);
        }}
      />

      <>
        {!bundle || bundle.loading ? (
          <div className="w-1/2">Loading...</div>
        ) : (
          <CodePrev code={bundle.code} err={bundle.err} />
        )}
      </>
    </div>
  );
};

export default CodeCell;
