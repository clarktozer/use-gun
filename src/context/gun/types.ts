import { IGunInstance } from "../../types";

export interface IGunContext {
    connect: (additionalPeers?: string[]) => IGunInstance;
    disconnect: () => void;
    gun: IGunInstance;
}
