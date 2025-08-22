import { useRef, type ReactNode } from "react";
import ContextConsumer from "./ContextConsumer";

export default function Middleware({
  text,
  children,
}: {
  text: string;
  children: ReactNode;
}) {
  const countRef = useRef(-1);
  console.log("Middleware", text);
  countRef.current++;

  return (
    <div
      style={
        countRef.current
          ? {
              backgroundColor: "lightgreen",
            }
          : undefined
      }
    >
      <p>
        Middleware: Context {countRef.current} {children}
      </p>

      <ContextConsumer />
    </div>
  );
}
