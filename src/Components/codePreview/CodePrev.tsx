import { useEffect, useRef } from "react";
import "./codePrev.css";
interface prevProps {
  code: string;
  err: string;
}

// Defining Variable to hold the html code that will be displayed in the iframe
const html = `
<html>
<head> </head>
<body>
  <div id="root"></div>
  <script>
function errorHandler(err) {
  const root = document.querySelector("#root");
  root.innerHTML = "<div style='color:red'>" + err + "</div>";
}

window.addEventListener(
  "error",(event)=>{
    event.preventDefault();
    errorHandler(event.error)
  }
)

    window.addEventListener(
      "message",
      (event) => {
        try {
          eval(event.data);
        } catch (err) {
          errorHandler(err);
        }
      },
      false
    );
  </script>
</body>
</html>
`;

const CodePrev: React.FC<prevProps> = ({ code, err }) => {
  const iframeRef = useRef<any>();

  //Update the code compiled in the iframe when the code changes
  useEffect(() => {
    iframeRef.current.srcDoc = html;
    setTimeout(() => {
      iframeRef.current?.contentWindow?.postMessage(code, "*");
    }, 50);
  }, [code, err]);

  return (
    <div className="prev-wrapper">
      <iframe
        className="prev-iframe"
        title="preview"
        ref={iframeRef}
        sandbox="allow-scripts"
        srcDoc={html}
      />
      {err && (
        <div className="prev-error">
          <p> {err}</p>
        </div>
      )}
    </div>
  );
};

export default CodePrev;
