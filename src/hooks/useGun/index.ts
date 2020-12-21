import { useContext } from "react";
import { GunContext } from "../../context";
import { IGunContext } from "../../context/gun/types";
import { IGunInstance } from "../../types";

export const useGun = (): [IGunInstance, Omit<IGunContext, "gun">] => {
    const { gun, ...rest } = useContext(GunContext);

    return [gun, rest];
};
