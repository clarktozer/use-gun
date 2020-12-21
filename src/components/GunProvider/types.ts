export interface IGunProvider {
    peerUrls: string[];
    connectOnMount?: boolean;
}

export interface IPeer {
    id: string;
    url: string;
    wire: WebSocket;
    retry?: number;
}

export interface IMesh {
    bye: (id: string) => void;
}
