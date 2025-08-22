import { useEffect, useState } from "react";

const shared = {
  text: "",
};

let event: (() => void) | null = null;

function subscribe(cb: () => void) {
  event = cb;
}

function emit() {
  event?.();
}

export function setText(value: string) {
  shared.text = value;
  emit();
}

export function getText() {
  return shared.text;
}

export function useValue() {
  const [text, setText] = useState(shared.text);

  const snapshot = getText();

  if (snapshot !== text) {
    setText(snapshot);
  }

  // eslint-disable-next-line no-empty-pattern
  const [{}, update] = useState({});
  useEffect(() => {
    subscribe(() => {
      update({});
    });
  }, []);

  return text;
}
