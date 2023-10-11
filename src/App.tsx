import { Provider } from "react-redux";
import CodeCell from "./Components/codeCell/CodeCell";
import TextEditor from "./Components/textEditor/TextEditor";
import CellList from "./Components/cellList/CellList";
import { store } from "./Store";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-gray-400 p-7">
        <CellList />
      </div>
    </Provider>
  );
}

export default App;
