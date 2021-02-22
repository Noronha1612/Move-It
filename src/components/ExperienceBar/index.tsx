import React, { useState } from 'react';

import { HeaderContainer, ProgressBar, ProgressBarLabel } from './styles';

const ExperienceBar: React.FC = () => {
    const [ experience, setExperience ] = useState(400);

    return (
        <HeaderContainer>
            <span>0 xp</span>
            <div>
                <ProgressBar 
                    experienceGained={ experience }
                    experienceTotal={ 600 }
                />

                <ProgressBarLabel
                    experienceGained={ experience }
                    experienceTotal={ 600 }
                >{ experience } xp</ProgressBarLabel>
            </div>
            <span>600 xp</span>
        </HeaderContainer>
    );
}

export default ExperienceBar;