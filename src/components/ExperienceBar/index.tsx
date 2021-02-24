import React, { useContext, useState } from 'react';
import { ChallengesContext } from '../../contexts/ChallengeContext';

import { HeaderContainer, ProgressBar, ProgressBarLabel } from './styles';

const ExperienceBar: React.FC = () => {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    return (
        <HeaderContainer>
            <span>0 xp</span>
            <div>
                <ProgressBar 
                    experienceGained={ currentExperience }
                    experienceTotal={ experienceToNextLevel }
                />

                <ProgressBarLabel
                    experienceGained={ currentExperience }
                    experienceTotal={ experienceToNextLevel }
                >{ currentExperience } xp</ProgressBarLabel>
            </div>
            <span>{ experienceToNextLevel } xp</span>
        </HeaderContainer>
    );
}

export default ExperienceBar;