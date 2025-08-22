import { useValue } from "../../store/shared";

export default function StoreConsumer() {
  console.groupEnd();
  const text = useValue();
  return <div>StoreConsumer: {text}</div>;
}
