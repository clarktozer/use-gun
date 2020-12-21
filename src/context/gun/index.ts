import { createContext } from "react";
import { IGunContext } from "./types";

export const GunContext = createContext<IGunContext>(null);
