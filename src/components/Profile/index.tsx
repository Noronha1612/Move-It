import React from 'react';

import { Container } from './styles';

const Profile: React.FC = () => {
    return (
        <Container>
            <img src="https://avatars.githubusercontent.com/u/56375499?s=460&u=b2e69ac18ca2159e016598a84d44c69a97bc4829&v=4" alt="Avatar"/>
            <div>
                <strong>Gabriel Noronha</strong>
                <p>
                    <img src="icons/level.svg" alt="levelIcon"/>
                    Level 1
                </p>
            </div>
        </Container>
    );
}

export default Profile;