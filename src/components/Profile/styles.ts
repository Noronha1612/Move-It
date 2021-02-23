import styled from 'styled-components';
import { variables } from '../../styles/global';

export const Container = styled.div`
    display: flex;
    align-items: center;

    & > img {
        width: 5.5rem;
        height: 5.5rem;
        border-radius: 50%;
    }

    div {
        margin-left: 1.5rem;

        strong {
            font-size: 1.5rem;
            font-weight: 600;
            color: ${ variables.title };
        }

        p {
            font-size: 1rem;
            margin-top: .5rem;

            display: flex;
            align-items: center;

            img {
                margin-right: .5rem;
            }
        }
    }
`;
