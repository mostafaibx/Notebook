import { ResizableBox, ResizableBoxProps } from "react-resizable";
import "./resizable.css";
import { useEffect, useState } from "react";
import { listeners } from "process";

interface ResizableProps {
  direction?: "horizontal" | "vertical";
  children?: React.ReactNode;
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [width, setWidth] = useState(window.innerWidth * 0.8);

  useEffect(() => {
    let timer: any;
    const listener = () => {
      if (timer) {
        clearTimeout(timer);
      }
      setTimeout(() => {
        setInnerHeight(window.innerHeight);
        setInnerWidth(window.innerWidth);
      }, 100);
    };

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  let resizableConfig: ResizableBoxProps;
  if (direction === "horizontal") {
    resizableConfig = {
      className: "resize-horizontal",
      height: Infinity,
      width: width,
      resizeHandles: ["e"],
      maxConstraints: [innerWidth * 0.75, Infinity],
      minConstraints: [innerWidth * 0.2, Infinity],
    };
  } else {
    resizableConfig = {
      height: 200,
      width: width,
      resizeHandles: ["s"],
      maxConstraints: [Infinity, innerHeight * 0.8],
      minConstraints: [50, 50],
    };
  }

  return <ResizableBox {...resizableConfig}>{children}</ResizableBox>;
};

export default Resizable;
