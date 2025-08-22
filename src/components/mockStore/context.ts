import { createContext } from "react";

export interface MockContextData {
  text: string;
}

export interface MockContextType {
  data: MockContextData | null;
}

export const MockContext = createContext<MockContextType>({
  data: null,
});
