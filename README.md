# use-gun

![CI Status](https://img.shields.io/github/workflow/status/clarktozer/use-gun/CI)
[![npm version](https://img.shields.io/npm/v/use-gun.svg)](https://www.npmjs.com/package/use-gun)

React Hooks for GunDB

## GunProvider

A React provider which will allow access to the connect, disconnect functions, and the current gun instance using the "useGun" hook.

```js
import React, { FC } from "react";
import { GunProvider } from "use-gun";

const App: FC = ({ children }) => {
    const peers = ["https://events.mydomain.com"];

    return (
        <GunProvider peerUrls={peers}>
            <div className="my-app"><MyComponent /></div>
        </GunProvider>
    );
};
```

#### Options:

| option          | default | Description                                                           |
| --------------- | ------- | --------------------------------------------------------------------- |
| peerUrls        | -       | String array of urls for each. peer                                   |
| connectOnMount? | false   | Automatically call the connect function when the provider is mounted. |

## useGun

A React context for getting the connect, disconnect functions, and the current gun instance. Will only work if your app is wrapped in the GunProvider.

```js
import React, { FC, useEffect } from "react";
import { useGun } from "use-gun";

const MyComponent: FC = () => {
    const { gun, connect, disconnect } = useGun();

    useEffect(() => {
        connect();
    }, []);

    const onButtonClick = () => {
        disconnect();
    };

    return (
        <div className="my-component">
            <button onClick={onButtonClick}>Disconnect Gun</button>
        </div>
    );
};
```

## useGunWatch

A React hook for listening to changes on a property and providing the ability to unsubscribe.

```js
import React, { FC } from "react";
import { useGunWatch } from "use-gun";

const MyComponent: FC = () => {
    const [value, unsubscribe] = useGunWatch("my-key", 0);
    const [otherValue, unsubscribeOtherValue] = useGunWatch<string>("my-other-key");

    const onButtonClick = () => {
        unsubscribe();
    };

    return (
        <div className="my-component">
            <strong>{value}</strong>
            <button onClick={onButtonClick}>Unsubscribe Key</button>
        </div>
    );
};
```

#### Options:

| option        | default | Description                                                         |
| ------------- | ------- | ------------------------------------------------------------------- |
| key           | -       | Key for property to listen to.                                      |
| initialValue? | -       | Inital state value. If not value is passed, a generic can be added. |
