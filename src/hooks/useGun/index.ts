import { useContext } from "react";
import { GunContext } from "../../context";
import { IGunContext } from "../../context/gun/types";

export const useGun = (): IGunContext => useContext(GunContext);
