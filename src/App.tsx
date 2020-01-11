import React from "react";

import styles from "./styles.module.css";
import { useTime } from "./hooks/useTime";

const App: React.FC = () => {
    const time = useTime();

    return (
        <main>
            <h1 className={styles.heading}>Stop talking.</h1>
            <p>It&apos;s been {time / 1000} second(s).</p>
        </main>
    );
};

export default App;
