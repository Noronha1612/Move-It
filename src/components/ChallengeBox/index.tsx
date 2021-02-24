import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengeContext';

import { ChallengeActive, ChallengeNotActive, CompleteButton, Container } from './styles';

const ChallengeBox: React.FC = () => {
    const { activeChallenge, resetChallenge } = useContext( ChallengesContext );

    return (
        <Container>
            { activeChallenge ? (
                <ChallengeActive>
                    <header>Ganhe { activeChallenge.amount } xp</header>

                    <main>
                        <img 
                            src={ activeChallenge.type === 'body' ? "icons/body.svg" : "icons/eye.svg" } 
                            alt=""
                        />
                        <strong>Novo desafio</strong>
                        <p>{ activeChallenge.description }</p>
                    </main>

                    <footer>
                        <CompleteButton
                            type="button"
                            buttonType="failed"
                            onClick={ resetChallenge }
                        >
                            Falhei
                        </CompleteButton>
                        <CompleteButton
                            type="button"
                            buttonType="success"
                        >
                            Completei
                        </CompleteButton>
                    </footer>
                </ChallengeActive>
            ) : (
                <ChallengeNotActive>
                    <strong>Finalize um cíclo para receber desafios</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de level completando desafios
                    </p>
                </ChallengeNotActive>
            )}
        </Container>
    );
}

export default ChallengeBox;