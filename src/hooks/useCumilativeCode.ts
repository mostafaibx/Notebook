import useTypedSelector from "./useTypedSelector";

export const useCumilativeCode = (cellId: string) => {
  // Create an array of code cells content to bundle all code in notebook together
  const cumuilativeCode: string = useTypedSelector((stat) => {
    const { data, order } = stat.cells;
    const orderedCells = order.map((id) => data[id]);

    // Implementing a show function to display the content of a codeCell
    const showFunction = `
    var show = (value) => {
        const root = document.querySelector("#root");
        if (typeof value === "object") {
          if (value.$$typeof && value.props) {
            _ReactDom.render(value, root);
          } else {
            root.innerHTML = JSON.stringify(value);
          }
        } else {

          root.innerHTML = value;
        }
      };
`;

    const showFunctionNoOp = `var show = () => {};`;

    const cumuilativeCode: string[] = [];

    for (let c of orderedCells) {
      if (c.type === "code") {
        // show function conditionally to avoid calling the same function in all iFrames
        if (c.id === cellId) {
          cumuilativeCode.push(showFunction);
        } else {
          cumuilativeCode.push(showFunctionNoOp);
        }
        cumuilativeCode.push(c.content);
      }
      if (c.id === cellId) {
        break;
      }
    }
    return cumuilativeCode.join("\n");
  });
  return cumuilativeCode;
};
