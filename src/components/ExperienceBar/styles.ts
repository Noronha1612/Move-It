import styled from 'styled-components';
import { variables } from '../../styles/global';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;

    span {
        font-size: 1rem;
    }
  
    & > div {
        flex: 1;
        height: 4px;
        border-radius: 4px;
        background: ${ variables.grayLine };
        margin: 0 1.5rem;

        position: relative;
    }
`;

interface ProgressBarProps {
    experienceGained: number;
    experienceTotal: number;
}

export const ProgressBar = styled.div.attrs<ProgressBarProps>(( { experienceGained, experienceTotal } ) => ({
    style: {
        width: `${ Math.floor(100 * (experienceGained / experienceTotal)) }%`
    } 
}))<ProgressBarProps>`
    height: 4px;

    border-radius: 4px;
    background: ${ variables.green };
`

export const ProgressBarLabel = styled.span.attrs<ProgressBarProps>(( { experienceGained, experienceTotal } ) => ({
    style: {
        left: `${ Math.floor(100 * (experienceGained / experienceTotal)) }%`
    } 
}))<ProgressBarProps>`
    position: absolute;
    top: 12px;

    transform: translateX(-50%);
`