import { useContext } from "react";
import { MockContext } from "./context";

export default function ContextConsumer() {
  console.groupEnd();
  const { data } = useContext(MockContext);
  return <div>ContextConsumer: {data?.text}</div>;
}
