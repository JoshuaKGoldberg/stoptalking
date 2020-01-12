import React, { useEffect, useState } from "react";
import YouTube, { PlayerVars } from "react-youtube";

export type OutOfTimeProps = {
    over: number;
};

const playerVars: PlayerVars = {
    autoplay: 1,
    controls: 0,
    enablejsapi: 1,
    start: 100,
};

export const OutOfTime: React.FC<OutOfTimeProps> = ({ over }) => {
    const [player, setPlayer] = useState();

    useEffect(() => {
        if (!player) {
            return;
        }

        player.setVolume(Math.min(over / 10000, 100));
    }, [over, player]);

    return (
        <YouTube
            opts={{ playerVars }}
            onReady={event => {
                setPlayer(event.target);
                event.target.setVolume(1);
            }}
            videoId="RxabLA7UQ9k"
        />
    );
};
