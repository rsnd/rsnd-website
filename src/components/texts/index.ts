import Styled from "styled-components";

interface ITexts {
  fontSize?: string | number;
  fontFamily?: string;
  color?: string;
}

const Heading = Styled.h1<ITexts>`
    font-size: ${props => (props.fontSize ? props.fontSize : `3.4rem`)};
    font-family: ${props =>
      props.fontFamily ? props.fontFamily : props.theme.fonts.druk.heavy};
    color: ${props => (props.color ? props.color : `inherit`)};
`;

const Emphasize = Styled.span<ITexts>`
    font-style: italic;
    font-family: inherit;
    font-size: inherit;
    color: ${props => (props.color ? props.color : props.theme.colors.red)}
`;

const Paragraph = Styled.p<ITexts>`
    font-size: ${props => (props.fontSize ? props.fontSize : `1.6rem`)};
    font-family: ${props =>
      props.fontFamily ? props.fontFamily : props.theme.fonts.eina.regular};
    color: ${props => (props.color ? props.color : `inherit`)};
`;

export { Heading, Emphasize, Paragraph };
