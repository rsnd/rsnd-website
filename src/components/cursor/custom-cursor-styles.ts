import Styled from "styled-components";

export const CursorContainer = Styled.div`
    width: 5rem;
    height: 5rem;
    position: absolute;
    top: -0px;
    left: -0px;
    z-index: 9999;
    pointer-events: none;
    overflow: visible;
`;

export const CursorFollow = Styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: rgba(206,58,58, 0);  
    position: absolute;
    top: -0px;
    left: -0px;
    transform: translate3d(-25px, -25px, 0);
    border: .5px solid ${props => props.theme.colors.red};
`;

export const CursorCircle = Styled.div`
    width: .5rem;
    height: .5rem;
    border-radius: 50%;
    position: absolute;
    top: -0px;
    left: -0px;
    background-color: ${props => props.theme.colors.red};
`;
