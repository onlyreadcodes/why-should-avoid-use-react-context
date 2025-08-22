import Middleware from "./Middleware";
import { setText } from "../../store/shared";
import { useEffect, useRef } from "react";

export default function ParentWithAction({
  defaultText,
  clickable = false,
}: {
  defaultText: string;
  clickable?: boolean;
}) {
  console.group("ParentWithAction");

  const initFnRef = useRef(() => {
    setText(defaultText);
  });

  useEffect(() => {
    initFnRef.current();
  }, []);

  return (
    <Middleware text={defaultText}>
      {clickable && (
        <button
          onClick={() => {
            setText("Store changed");
          }}
        >
          update state
        </button>
      )}
    </Middleware>
  );
}
