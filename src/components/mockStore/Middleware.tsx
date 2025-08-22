import { useRef, type ReactNode } from "react";
import StoreConsumer from "./StoreConsumer";
export default function Middleware({
  text,
  children,
}: {
  text: string;
  children: ReactNode;
}) {
  const countRef = useRef(-1);
  console.log("Middleware rendered", text);
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
        Middleware: Store {countRef.current} {children}
      </p>

      <StoreConsumer />
    </div>
  );
}
