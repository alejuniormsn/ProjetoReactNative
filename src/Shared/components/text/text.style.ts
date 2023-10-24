import styled from 'styled-components/native';

interface TextContainerProps {
  color?: string;
  fontSize?: string;
  fonFamily: 'Poppins-Bold' | 'Poppins-Light' | 'Poppins-Regular';
}

export const TextContainer = styled.Text<TextContainerProps>`
  ${(props: any) => `color: ${props.color}`};
  font-family: ${(props: any) => props.fontFamily};
  font-size: ${(props: any) => props.fontSize};
`;
