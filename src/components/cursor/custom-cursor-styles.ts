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
    /* transform: translateZ(0); */
`;

interface IFollowerProps {
  isHovered?: boolean;
}
export const CursorFollow = Styled.div<IFollowerProps>`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: rgba(206,58,58, 0);  
    position: fixed;
    top: -0px;
    left: -0px;
    transform: translate3d(-25px, -25px, 0);
    border: .45px solid ${props => props.theme.colors.red};
    will-change: transform;
`;

export const CursorCircle = Styled.div<any>`
    width: .5rem;
    height: .5rem;
    border-radius: 50%;
    position: fixed;
    top: -0px;
    left: -0px;
    background-color: ${props => props.theme.colors.red};
    opacity: ${props => (props.isHovered ? 0 : 1)};
    transition: opacity .15s cubic-bezier(0.86, 0, 0.07, 1);
    transform: translateZ(0);
`;

export const CursorActionText = Styled.span<any>`
    color: ${props => props.theme.colors.red};
    font-size: .95rem;
    text-transform: uppercase;
    letter-spacing: .2rem;
    font-weight: 900;
    position: fixed;
    top: -0px;
    left: -0px;
    opacity: ${props => (props.isHovered ? 1 : 0)};
    transition: opacity .15s cubic-bezier(0.86, 0, 0.07, 1);
    font-family: ${props => props.theme.fonts.druk.medium};
`;
