import styled from 'styled-components';
import { variables } from '../../styles/global';

export const CountdownContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Rajdhani', sans-serif;
    font-weight: 600;
    color: ${ variables.title };

    & > div {
        flex: 1;

        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background: ${ variables.white };
        box-shadow: 0 0 60px rgba(0, 0, 0, .05);
        border-radius: 5px;
        font-size: 8.5rem;
        text-align: center;

        span {
            flex: 1;
        }

        span:first-child {
            border-right: 1px solid #f0f1f3;
        }
        span:last-child {
            border-left: 1px solid #f0f1f3;
        }
    }

    & > span {
        font-size: 6.25rem;
        margin: 0 0 0.5rem;
    }
`;

export const CountdownButton = styled.button<{ active: boolean }>`
    width: 100%;
    height: 5rem;

    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    background: ${ props => props.active ? variables.white : variables.blue };
    color: ${ props => props.active ? variables.blue : variables.white };

    font-size: 1.25rem;
    font-weight: 600;

    transition: background-color .2s;

    &:not(:disabled):hover {
        background: ${ props => props.active ? variables.red : variables.blueDark };
        ${ props => props.active && `color: ${ variables.white };` }
    }

    &:disabled {
        cursor: not-allowed;
        background: ${ variables.white };
        color: ${ variables.text };

        border-bottom: 3px solid ${ variables.green };
    }
`