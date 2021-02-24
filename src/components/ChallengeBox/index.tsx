import React from 'react';

import { ChallengeActive, ChallengeNotActive, CompleteButton, Container } from './styles';

const ChallengeBox: React.FC = () => {
    const hasActiveChallenge = true;

    return (
        <Container>
            { hasActiveChallenge ? (
                <ChallengeActive>
                    <header>Ganhe 400 xp</header>

                    <main>
                        <img src="icons/body.svg" alt=""/>
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos.</p>
                    </main>

                    <footer>
                        <CompleteButton
                            type="button"
                            buttonType="failed"
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