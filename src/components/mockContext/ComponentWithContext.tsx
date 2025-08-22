import { useState } from "react";
import Middleware from "./Middleware";
import { MockContext } from "./context";

export default function ComponentWithContext({
  defaultText,
  clickable = false,
}: {
  defaultText: string;
  clickable?: boolean;
}) {
  console.group("ComponentWithContext");
  const [text, setText] = useState(defaultText);

  return (
    <MockContext.Provider value={{ data: { text } }}>
      <Middleware text={defaultText}>
        {clickable && (
          <button
            onClick={() => {
              setText("Context changed");
            }}
          >
            update state
          </button>
        )}
      </Middleware>
    </MockContext.Provider>
  );
}
