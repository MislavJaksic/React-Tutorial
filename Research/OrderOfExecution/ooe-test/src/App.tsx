import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function Parent() {
    const [state, setState] = useState(null);

    useEffect(() => {
        console.log("Parent useEffect");
    });

    useLayoutEffect(() => {
        console.log("Parent useLayoutEffect");
    });

    console.log("Parent");

    const memoizedData = useMemo(() => {
        console.log("Parent useMemo");
    }, []);

    return (
        <>
            <Child />
        </>
    );
}

function Child() {
    const [state, setState] = useState(null);

    useEffect(() => {
        console.log("Child useEffect");
    });

    useLayoutEffect(() => {
        console.log("Child useLayoutEffect");
    });

    console.log("Child");

    const memoizedData = useMemo(() => {
        console.log("Child useMemo");
    }, []);

    return <></>;
}

function App() {
    return (
        <>
            <Parent />
        </>
    );
}

export default App;
