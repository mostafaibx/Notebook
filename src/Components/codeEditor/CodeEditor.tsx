import MonacoEditor, { EditorDidMount } from "@monaco-editor/react";
import { useRef } from "react";
import prettier from "prettier";
import parser from "prettier/parser-babel";
import "./codeEditor.css";

interface CodeEditorProps {
  initialValue: string;
  onChange: (value: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
  const editorRef = useRef<any>();

  /*
 A description of the entire function.
 @param {CodeEditorProps} initialValue - the initial value for the code editor
 @param {function} onChange - callback function called when the code in the editor changes
 @return {ReactElement} the rendered CodeEditor component
 */
  const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
    editorRef.current = monacoEditor;
    monacoEditor.onDidChangeModelContent(() => {
      onChange(getValue());
    });
  };

  //Format the code in the editor using Prettier
  function onFormatClick() {
    const unformatted = editorRef.current.getModel().getValue();
    const formatted = prettier.format(unformatted, {
      parser: "babel",
      plugins: [parser],
    });
    editorRef.current.setValue(formatted);
  }

  return (
    <div className="w-full h-48">
      <button className="formate-btn" onClick={onFormatClick}>
        Format
      </button>
      <MonacoEditor
        value={initialValue}
        editorDidMount={onEditorDidMount}
        height={"100%"}
        width={"100%"}
        theme="dark"
        language="javascript"
        options={{
          wordwrap: "on",
          showUnused: false,
          lineNumbersMinChars: 3,
          fontSize: 18,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
