import React, { ReactNode } from "react";

export interface IJoke {
  children: ReactNode;
}

export type JokeContextType  = {
  joke: string;
  getJoke: any;
}