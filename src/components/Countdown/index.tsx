import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { CountdownButton, CountdownContainer } from './styles';

const Countdown: React.FC = () => {
    const [ time, setTime ] = useState(25 * 60);
    const [ active, setActive ] = useState(false);

    const minutes = useMemo(() => Math.floor(time / 60), [ time ]);
    const seconds = useMemo(() => time % 60, [ time ]);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    const startCountdown = useCallback(() => {
        setActive(true);
    }, []);

    useEffect(() => {
        if ( active && time > 0 ) {
            setTimeout(() => { setTime( time - 1 ) }, 1000);
        }
    }, [active, time]);

    return (
        <>
            <CountdownContainer>
                <div>
                    <span>{ minuteLeft }</span>
                    <span>{ minuteRight }</span>
                </div>
                <span>:</span>
                <div>
                    <span>{ secondLeft }</span>
                    <span>{ secondRight }</span>
                </div>
            </CountdownContainer>
            <CountdownButton
                onClick={ startCountdown }
            >
                Iniciar um ciclo
            </CountdownButton>
        </>
    );
}

export default Countdown;