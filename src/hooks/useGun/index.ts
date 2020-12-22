import { useContext } from "react";
import { GunContext } from "../../context";

export const useGun = () => useContext(GunContext);
