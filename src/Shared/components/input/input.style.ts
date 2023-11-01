import styled from 'styled-components/native';
import {theme} from '../../themes/themes';
import {Icon} from '../icon/icon';

interface InputContainerProps {
  marginBottom?: string;
}

interface InputContentProps {
  isError?: string;
  hasSecureTextEntry?: boolean;
}

export const IconEye = styled(Icon)`
  position: absolute;
  right: 16px;
  top: 12px;
`;

export const InputContent = styled.TextInput<InputContentProps>`
  width: 100%;
  height: 48px;
  padding: 16px ${(props: any) => (props.hasSecureTextEntry ? '48px' : '12px')}
    16px 12px;
  border-width: 2px;
  border-radius: 8px;
  border-color: ${(props: any) =>
    props.isError ? theme.colors.orange80 : theme.colors.gray80};
  color: ${theme.colors.black};
  background-color: ${theme.colors.white};
`;

export const InputContainer = styled.View<InputContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${(props: any) => props.marginBottom};
`;
