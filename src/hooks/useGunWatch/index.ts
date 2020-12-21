import { useCallback, useEffect, useState } from "react";
import { IGunInstance } from "../../types";
import { useGun } from "../useGun";

export const useGunWatch = <T>(key: string, initialValue?: T): [T, () => void] => {
    const [gun] = useGun();
    const [value, setValue] = useState<T>(initialValue);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [instance, setInstance] = useState<IGunInstance>(null);

    const unsubscribe = useCallback(() => {
        setInstance(current => {
            if (current) {
                current.off();
            }

            return null;
        });
    }, [setInstance]);

    useEffect(() => {
        if (gun && key) {
            gun.get(key).on((message: T, _key: any, _message: any, ev: any) => {
                setInstance(ev);
                setValue(message);
            });

            return unsubscribe;
        }
    }, [gun, key, unsubscribe, setInstance, setValue]);

    return [value, unsubscribe];
};
