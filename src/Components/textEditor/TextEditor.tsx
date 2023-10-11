import MDEditor from "@uiw/react-md-editor";
import { useEffect, useRef, useState } from "react";
import "./TextEditor.css";
import { Cell } from "../../Store/cell";
import { useActions } from "../../hooks/useActions";

interface TextEditorProps {
  cell: Cell;
}
const TextEditor: React.FC<TextEditorProps> = ({ cell }) => {
  const [editing, setEditing] = useState(false);
  const editorRef = useRef<any>();

  const { updateCell } = useActions();

  //Handling the click event to show/hide the editor
  useEffect(() => {
    const listener = () => {
      setEditing(false);
    };
    const handleClick = (event: MouseEvent) => {
      if (
        event.target &&
        editorRef.current &&
        editorRef.current.contains(event.target)
      ) {
        return;
      } else {
        listener();
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, []);

  if (editing) {
    return (
      <div className="text-editor-wrapper" ref={editorRef}>
        <MDEditor
          value={cell.content}
          onChange={(v) => updateCell(cell.id, v || "")}
        ></MDEditor>
      </div>
    );
  }

  return (
    <div className="text-editor-wrapper" onClick={() => setEditing(true)}>
      <MDEditor.Markdown source={cell.content || "Click to edit"} />
    </div>
  );
};

export default TextEditor;
