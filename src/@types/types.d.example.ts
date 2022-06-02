import React, { ReactNode } from "react";

export interface IExample {
  text: string;
  children: ReactNode;
}

export type ExampleContextType  = {
  currentText: string;
  setText: React.Dispatch<React.SetStateAction<string>>
}