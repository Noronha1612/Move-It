import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { variables } from '../../styles/global';

import { CountdownButton, CountdownContainer } from './styles';

let countdownTimeout: NodeJS.Timeout;

const Countdown: React.FC = () => {
    const [ time, setTime ] = useState(25 * 60);
    const [ isActive, setIsActive ] = useState(false);
    const [ hasFinished, setHasFinished ] = useState(false);

    const minutes = useMemo(() => Math.floor(time / 60), [ time ]);
    const seconds = useMemo(() => time % 60, [ time ]);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');



    const startCountdown = useCallback(() => {
        setIsActive(true);
    }, []);
    const stopCountdown = useCallback(() => {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(25 * 60);
    }, []);



    useEffect(() => {
        if ( isActive && time > 0 ) {
            countdownTimeout = setTimeout(() => { 
                setTime( time - 1 ) 
            }, 1000);
        } else if ( isActive && time === 0 ) {
            setHasFinished(true);
            setIsActive(false);
        }
    }, [isActive, time]);


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
            {
                hasFinished ? (
                    <CountdownButton
                        disabled
                        active={ false }
                    >
                        Ciclo encerrado
                        <FiCheckCircle style={{ marginLeft: 8 }} size={15} color={ variables.green } />
                    </CountdownButton>
                ) : (
                    <CountdownButton
                        active={ isActive }
                        onClick={ isActive ? stopCountdown : startCountdown }
                    >
                        { isActive ? 
                            'Abandonar Ciclo' :
                            'Iniciar Ciclo'
                        }
                    </CountdownButton>
                )
            }
            
        </>
    );
}

export default Countdown;