import { Provider } from "react-redux";
import CellList from "./Components/cellList/CellList";
import { store } from "./Store";

function App() {
  return (
    <Provider store={store}>
      <div className="p-7">
        <CellList />
      </div>
    </Provider>
  );
}

export default App;
