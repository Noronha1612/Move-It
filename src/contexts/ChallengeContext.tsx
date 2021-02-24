import { createContext, useState } from 'react';

export interface ChallengesContextData {
    level: number;
    levelUp: () => void;
    currentExperience: number;
    challengesCompleted: number;
    startNewChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export const ChallengesProvider: React.FC = ({ children }) => {
    const [ level, setLevel ]= useState(1);
    const [ currentExperience, setCurrentExperience ] = useState(0);
    const [ challengesCompleted, setChallengesCompleted ] = useState(0);
  
    function levelUp() {
        setLevel(level + 1);
    }
    
    function startNewChallenge() {
        console.log('New challenge');
    }

    return (
        <ChallengesContext.Provider 
        value={{ 
            level, 
            levelUp, 
            currentExperience, 
            challengesCompleted,
            startNewChallenge
        }} 
        >
            { children }
        </ChallengesContext.Provider>
    );
}